import Carousel_InfoStudent from '../Carousel_InfoStudent/Carousel_InfoStudent';
import Participated from '../Participated/Participated';

const InforStuDefaultStyle = {
    padding : 0
}

const InforStuDefault = () => {
    return(
        <div className = "container InforStuDefault" style={InforStuDefaultStyle}>
            <Carousel_InfoStudent />
            <Participated />
        </div>
    );
}
export default InforStuDefault;