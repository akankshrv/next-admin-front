export default function AnnexureALayout(props:{
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            {props.children}
            {props.modal}
            <div id="modal-root"/>
            <div id="modal-root-edit"/>
        </>
    )
}