const initialState = {
    sinhVien: {
        userName: "",
        mssv: "",
        token: ""
    }

}

const myReducer = (state = initialState, action) => {
    if (action.type === 'LOGIN') {
        return {
            sinhVien: {
                userName: action.sinhVien.userName,
                mssv: action.sinhVien.mssv,
                token: action.sinhVien.token
            }
        }
    }
    return state;
}
export default myReducer;