import React, { Component } from 'react';
import Editor from './editor'
import { Button, Grid, Row, Col } from 'react-bootstrap';


class MarkDown extends Component
{

    update = () =>{
            console.log("ssssss")
    }

    render()
    {
        return(
            <div>
                <p>MarkDown Sample</p>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}><Editor id="result" text="result" /></Col>
                        <Col md={6} mdPull={6}><Editor id="origen" update={this.update} text="origen" /></Col>
                    </Row>
                </Grid>

                <Button bsStyle="primary">Render</Button>

            </div>

        )

    }

}

export default MarkDown