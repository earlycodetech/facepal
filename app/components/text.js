export const Text = ({children,size,colour}) => { {/* we are destructuring to add multiple styles to different texts */}
    const ng = 234;

    return <p style={{fontSize:size,color:colour}}>{children}</p>; {/*the children is added to allow you add more content into the text */} 
}