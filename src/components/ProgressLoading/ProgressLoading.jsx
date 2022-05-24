import  {useEffect, useState} from 'react';
import { Row, Col, Progress } from 'antd';

function ProgressLoading() {

  const [percent, setPercent] = useState(0);


  useEffect(() => {
    let currentPercent = percent;
      const timer = setInterval(() => {
        // return;
        if(currentPercent >= 100) {
          clearInterval(timer);
          return
        }
        console.log(currentPercent);
        setPercent((prevPercent) => {
          currentPercent = prevPercent + 0.5;
          return prevPercent + 0.5;
        })
      }, 30)


  }, [])


  // const nextStep = (nextPercent, time) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       setPercent(nextPercent);
  //       resolve();
  //     }, time)
  //   })
  // }

  // useEffect(() => {
  //   nextStep(20, 500)
  //   .then(() => nextStep(40, 600))
  //   .then(() => nextStep(80, 1000))
  //   .then(() => nextStep(100, 2000))

  // }, [])

  return (
    <Row>
      <Col span={24}>
        <Progress percent={percent} showInfo={false}/>
      </Col>
    </Row>
  );
}

export default ProgressLoading;
