import React, { Component } from 'react';
import Editor from './editor'
import { Button, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios'


class MarkDown extends Component
{

    update = (ev) =>{
            //console.log(ev)      
    }

    run = () => {
        let code='print(1)'
        axios.post('http://localhost:4000/python',
                    {
                        sourcecode:code
                    }   
                ).then(function (response) {        
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });   
    }

    render()
    {
        return(
            <div>
                <p>MarkDown Sample</p>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}><Editor id="result" getdate=""  text="result" title="Result here"   /></Col>
                        <Col md={6} mdPull={6}><Editor id="origen" update={this.update} text="origen" title="Write here"  /></Col>
                    </Row>
                </Grid>

                <Button bsStyle="primary" onClick={this.run } >Run code</Button>

            </div>

        )

    }

}

export default MarkDown