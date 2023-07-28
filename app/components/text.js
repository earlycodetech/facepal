
export const Text = ({children,size,colour}) => {
    const ng = 234;

    return <p style={{fontSize:size,color:colour}}>
        {children}
    </p>
}