export default function Tabs({children, buttons, ButtonsContainer = 'menu' /*valor default*/}){

    //const ButtonsContainer = buttonsContainer;
    return <>  
    <ButtonsContainer>
        {buttons}
    </ButtonsContainer>
    {children}
    </>
}