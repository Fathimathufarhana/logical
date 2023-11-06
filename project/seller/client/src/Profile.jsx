import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./css/profile.css"
import Cards from './Cards';




const Profile = () => {
    const [card,setCard]= useState([])

    return (
        <>
            <Container style={{ margin: "0% 20% 0% 20%" }}>
                <Row className='row'>
                    <Col>
                        <div className="pic">
                            <img className='pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfXZZIegeqXp3BAYd5hub8MYItKEpBexNNQ&usqp=CAU' alt='image'></img>
                        </div>
                    </Col>
                    <Col>
                        <div className="main-div">

                            <div className="first-div">
                                <h1 className='name'>Andrea</h1>
                                <button className='follow'>Follow</button>
                            </div>

                            <div className='second-div'>
                                <div className='post'>
                                    <p>12</p>
                                    <p>Posts</p>

                                </div>
                                <div className='followers'>
                                    <p>100M</p>
                                    <p>Followers</p>
                                </div>
                                <div className='following'>
                                    <p>1</p>
                                    <p>Following</p>
                                </div>

                            </div>
                            <div className="bio">
                                <p>Bio:who bakes and sometimes sells breads and other products made of flour by using an oven or other concentrated heat source</p>
                            </div>

                        </div>
                    </Col>
                </Row>



                {/* <Row>
                    <Col>
                        <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ-JaRDhmQifNzOqTjZ83NBLUn0VKn-AmmaA&usqp=CAU" alt="" />
                    </Col>
                    <Col>
                        <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdt2GhV4O-9AA35Jn5h77LFLMclvE8PAqI9g&usqp=CAU" alt="" />
                    </Col>
                    <Col>
                        <img className='image' src="https://hips.hearstapps.com/hmg-prod/images/highproteinbreakfastideas-1664822657.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*" alt="" />
                    </Col>
                </Row> */}

             {/* {
                card.map((item,index)=> {
                    console.log(item,"ittteeeeeeeeeemmmmmmmmmmm");
                    return(
                        <>
                        <Cards data={item}/>
                        </>
    
                    )
                })
             } */}
             <Cards/>
            </Container>
        
            


        </>
    )
}

export default Profile