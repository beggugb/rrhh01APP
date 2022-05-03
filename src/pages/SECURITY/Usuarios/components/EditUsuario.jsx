import React,{ useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Table, Row,Col,Form, ButtonGroup, FormGroup, Input, Label,Card, CardBody, Button  } from "reactstrap"
import { crudActions } from '../../../../actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'  
import { custom } from '../../../../helpers/customStyles'
import { defaultVal } from "../../../../helpers/funciones";


const roles  = [{"value":1,"label":"administrador"},
                {"value":2,"label":"encargado"},
                {"value":3,"label":"vendedor"},
                {"value":4,"label":"cajero"},
                {"value":5,"label":"usuario"}
              ];

const EditUsuario = () => {
    const dispatch = useDispatch()  
    const {item } = useSelector(state => state.users)   
    const [pass1, setpass1] = useState();
    const [pass2, setpass2] = useState();
    
   

    const changesHandler = event => {            
      console.log(event)       
      const {value} = event ? event : ''        
      dispatch(crudActions.SET_CHANGE('USUARIOS_CHANGE','rolId',value))          
  }

    const changeHandler = event => {    
        const { name, value } = event.target  
        dispatch(crudActions.SET_CHANGE('USUARIOS_CHANGE',name,value))  
    }
      
    const submitHandle = event => {       
        event.preventDefault()        
        if(item.id)
        {          
          dispatch(crudActions.SET_UPDATE('USUARIOS_ADD','usuarios',item,'dato'))            
        }else{
          dispatch(crudActions.SET_ADD('USUARIOS_ADD','usuarios/crear',item,'lista'))           
        }   
       
     }  
     const submitHandlec = event => {       
      event.preventDefault()        
      let iok = item
      iok.password = pass1
      dispatch(crudActions.SET_UPDATE('USUARIOS_ADD','usuarios',iok,'lista'))            
   }  
     
    useEffect(() => {      
      return () => {
        dispatch({type:'USUARIOS_RESET_ITEM'})        
      };
    }, []); 
     

    return (  
      <>
      <Row>
        <Col md="12">
          <Card>        
            <CardBody>
              <h5>Formulario de Registro</h5>
              <Form onSubmit={ submitHandle}>
                <FormGroup>
                  <Label for="enombre">Nombres</Label>
                    <Input type="text" name="nombres" id="nombres" 
                      value={item.nombres || ''}                          
                      onChange={ (e) => changeHandler(e)} 
                      onInvalid={(e) => e.target.setCustomValidity('El campo nombre es obligatorio !')}
                      onInput={(e) => e.target.setCustomValidity('')}
                      required
                      />    
                </FormGroup>    
                <FormGroup>
                <Label for="enombre">Username</Label>
                
                  <Input type="text" name="username" id="username" 
                    value={item.username || ''}                          
                    onChange={ (e) => changeHandler(e)} 
                    onInvalid={(e) => e.target.setCustomValidity('El campo nombre es obligatorio !')}
                    onInput={(e) => e.target.setCustomValidity('')}
                    required/>    
                </FormGroup> 
              
                <FormGroup>
                <Label for="enombreCorto">Rol</Label>
                <Select                                                               
                        defaultValue={roles[0]}
                        styles={custom} 
                        name="rolId"    
                        id="rolId"                    
                        options={roles}                                                 
                        value={defaultVal(roles,item.rolId)}   
                        onChange={ (e) => changesHandler(e)}                                               
                      /> 
                </FormGroup>   
                <ButtonGroup>
                <Button 
                  type="submit"
                  className={item.id ?"btn-md btn-warning mt-2" : "btn-md btn-info mt-2"}>
                  <FontAwesomeIcon icon={faSave} />  
                  {' '} {item.id ? " Actualizar" : " Guardar"}
                </Button> 
                </ButtonGroup>
              </Form>
            </CardBody>
          </Card>  
        </Col>          
      </Row>  
      </>                                      
    );
};
export default EditUsuario;
