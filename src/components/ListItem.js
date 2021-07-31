import React from 'react';


class ListItem extends React.Component{
    state = {
        onEdit: false,
        editVal: this.props.item
    };

    onRemove = () =>{
        setTimeout(()=>{
            this.props.handleDelete();
        }, 100)
    };

    handleEditValue = e =>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    };

    onEdit = ()=>{
        this.setState({onEdit: true})
    };

    handleCancel = ()=>{
        const {editVal} = this.state;
        if(editVal === ''){
            this.setState({editVal: this.props.item});
        }
        this.setState({onEdit: false});
    };

    handleSave = () =>{
        const {editVal} = this.state;
        if(editVal === ''){
            this.setState({editVal: this.props.item});
        }else{
            this.props.handleEdit(editVal, this.props.id);
        }
        this.setState({onEdit: false})
    }

    render(){
        const {item} = this.props;
        if(this.state.onEdit){
            return(
                <li> 
                    <input type="text"
                    value={this.state.editVal}
                    name="editVal" id="editVal"
                    onChange={this.handleEditValue}
                    />
                    
                    <div className="row">
                        <i className="fa fa-save" 
                        title="Save"
                        onClick={this.handleSave}
                        />
                        <i className="fa fa-times"
                        title="Cancel"
                        onClick={this.handleCancel}
                        />
                    </div>
                </li>
            );
        }else{
            return(
                <li> {item} 
                    <div className="row">
                        <i className="fa fa-pencil" 
                        title="Edit"
                        onClick={this.onEdit}
                        />
                        <i className="fa fa-trash"
                        title="Delete"
                        onClick={this.onRemove} 
                        />
                    </div>
                </li>
            );
        }
        
    };
}

export default ListItem;