import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const PopUp = (props) => {
    const {children, openPopup, setOpenPopup } = props
    return (
        <Dialog open={openPopup}>
            <DialogTitle className="relative">
                <button onClick={()=>setOpenPopup(false)} className="absolute right-5 btn btn-error">Close</button>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default PopUp;