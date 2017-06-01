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

    change=(ev)=>{
        if(this.props.update)
            this.props.update(ev);
        
    }

    render()
    {
        return(
            <div>
                <Panel header={this.props.title}>                
                    <FieldGroup
                        id={this.props.id}
                        type="textarea"
                        placeholder={this.props.text}
                        style={{height:'100px'}}
                        //onChange={(ev)=>{this.change()}}
                        //{this.props.readonly==="true" }
                    />
                </Panel>

            </div>

        )

    }

}

export default Editor