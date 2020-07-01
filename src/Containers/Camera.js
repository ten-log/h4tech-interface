import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined,LineChartOutlined} from '@ant-design/icons';
import Iframe from 'react-iframe'
import { Line } from '@ant-design/charts';
import { GraphsAccid } from './Graphs';


const CameraList=({camList})=>{


    const bold = { fontWeight:'bold'  };
    const clCss= {width:'25%', background: camList==6 || camList==15 ?'yellow':'white' ,height:'100%'  , position:'relative' };

  return(
    <Col     style={clCss } >
             <h5 style={bold} >카메라 {camList}</h5>
             <Iframe url={`http://www.youtube.com/embed/EQEIg9j-gDI`} width="90%" height="120px" id="myId" className="myClassname" display="initial" position="relative"/>
    </Col>
  )
}

const Camera = () => {

    const bold = { fontWeight:'bold'  };
    const camList =[ 1 , 2, 3, 4, 5, 6, 7 ,8 , 9, 10, 11, 12 , 13, 14, 15, 16];
    return (
        <div>
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>

                    <Breadcrumb.Item><LineChartOutlined/>&nbsp;Camera</Breadcrumb.Item>
                </Breadcrumb>

                <div style={{marginTop:'5px'}}>Dashboard</div>

                <Row gutter={[16, 16]} >
                    <Col     style={ {width:'45%'  ,height:'50%' , marginTop:'10px'  }} >

                        <Row style={{ padding:'3%' , width:'80%' , height:'400px'  , marginTop:'20px', marginLeft:'12%',background: '#70AD47' }}>
                              <div style={{position:'relative' , marginTop:'-4%'  }}><h4 style={bold} >카메라1</h4></div>
                              <Iframe url={`http://www.youtube.com/embed/EQEIg9j-gDI`} width="100%" height="100%" id="myId" className="myClassname" display="initial" position="relative"/>
                        </Row>

                        <div style={{   width:'80%' , height:'250px'  ,  marginLeft:'12%',background: '' }}>
                          <GraphsAccid />
                        </div>

                    </Col>
                    <Col    style={{width:'54%', height:'100%' , marginTop:'10px'}} >
                        <Row gutter={[16, 16]}  style={{    }}>

                          {camList.map(camList =>(<CameraList  camList={camList} key={camList.id} ></CameraList>) )}
                        </Row>
                    </Col>
                </Row>

            </div>
        </Fragment>
        </div>
    );
};

export default Camera;
