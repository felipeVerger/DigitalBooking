import React from 'react'
import {
    Form,
    InputContainer,
    Label,
    TextField,
    SelectField,
    DescriptionBlock,
    DescriptionField,
    AtributesContainer,
    AtrTitle,
    Block,
    FlexWrapper,
    AtributeInputBlock,
    AtributeNameField,
    AtributeIconField,
    Button,
    ButtonIcon,
    PolicyContainer,
    PolicyTitle,
    PolicyBody,
    PolicyBlock,
    PolicyName,
    ImageContainer,
    ImageTitle,
    ImageBlock,
    PolicyField,
    SubmitButton
} from './FormComponents';

const FormComponent = () => {
  return (
    <Form>
        <InputContainer>
            <Label>Nombre de la propiedad</Label>
            <TextField
                placeholder='Hotel Hermitage'
            />
        </InputContainer>
        <InputContainer>
            <Label>Categoria</Label>
            <SelectField
                placeholder='Hotel'
            />
        </InputContainer>
        <InputContainer>
            <Label>Direccion</Label>
            <TextField
                placeholder='Av. Colon 1124'
            />
        </InputContainer>
        <InputContainer>
            <Label>Ciudad</Label>
            <SelectField
                placeholder='Ciudad'
            />
        </InputContainer>
        <DescriptionBlock>
            <Label>Descripcion</Label>
            <DescriptionField
                type='textarea'
                placeholder='Escribir aqui'
            />
        </DescriptionBlock>
        <InputContainer>
            <Label>Latitud</Label>
            <TextField
                placeholder='44.6578'
            />
        </InputContainer>
        <InputContainer>
            <Label>Longitud</Label>
            <TextField
                placeholder='-34.6578'
            />
        </InputContainer>
        <AtributesContainer>
            <AtrTitle>Agregar atributos</AtrTitle>
            <Block>
                <FlexWrapper>
                    <AtributeInputBlock>
                        <Label>Nombre</Label>
                        <AtributeNameField
                            placeholder='Wifi'
                        />
                    </AtributeInputBlock>
                    <AtributeInputBlock>
                        <Label>Icono</Label>
                        <AtributeIconField
                            placeholder='fa-Wifi'
                        />
                    </AtributeInputBlock>
                </FlexWrapper>
                <Button><ButtonIcon/></Button>
            </Block>
        </AtributesContainer>
        <PolicyContainer>
            <PolicyTitle>Pliticas del producto</PolicyTitle>
            <PolicyBody>
                <PolicyBlock>
                    <PolicyName>Normas de la casa</PolicyName>
                    <Label>Descripcion</Label>
                    <PolicyField
                        placeholder='Escribir aqui'
                    />
                </PolicyBlock>
                <PolicyBlock>
                    <PolicyName>Salud y seguridad</PolicyName>
                    <Label>Descripcion</Label>
                    <PolicyField
                        placeholder='Escribir aqui'
                    />
                </PolicyBlock>
                <PolicyBlock>
                    <PolicyName>Politica de cancelacion</PolicyName>
                    <Label>Descripcion</Label>
                    <PolicyField
                        placeholder='Escribir aqui'
                    />
                </PolicyBlock>
            </PolicyBody>
        </PolicyContainer>
        <ImageContainer>
            <ImageTitle>Cargar imagenes</ImageTitle>
            <ImageBlock>
                <TextField
                    placeholder='Insertar https://'
                />
                <Button><ButtonIcon/></Button>
            </ImageBlock>
        </ImageContainer>
        <SubmitButton to={'/administration/successful-product-creation'}>Crear</SubmitButton>
    </Form>
  )
}

export default FormComponent;