import React, { Component } from 'react';

import { Panel, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Editor extends Component
{

    change=()=>{
        if(this.props.update)
            this.props.update();
        
    }

    render()
    {
        return(
            <div>
                <Panel header="Panel heading without title">                
                    <FieldGroup
                        id={this.props.id}
                        type="textarea"
                        placeholder={this.props.text}
                        style={{height:'100px'}}
                        onChange={(ev)=>{this.change(ev)}}
                    />
                </Panel>

            </div>

        )

    }

}

export default Editor