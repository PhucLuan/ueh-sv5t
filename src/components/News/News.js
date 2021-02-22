import './News.css';
import top_1 from './Img/top 1.png';
import tron_1_06 from './Img/tròn 1-06.png';
import tron_2_07 from './Img/tròn 2-07.png';
import tron_3_08 from './Img/tròn 3-08.png';
import tron_4_09 from './Img/tròn 4-09.png';
import tron_5_10 from './Img/tròn 5-10.png';
import TC_DDT from './Img/tiêu chí đạo đức tốt-01.png';
import TC_HTT from './Img/tiêu chí học tập tốt-02.png';
import TC_TLT from './Img/3. tiêu chí thể lực tốt-03.png';
import TC_TNT from './Img/4. tiêu chí tình nguyện tốt-04-04.png';
import TC_HNT from './Img/5. tiêu chí hội nhập tốt-05.png';
import React from 'react';


const News = () => {

    const showContent = (id) => {
        if (document.getElementById(id) != null) {
            console.log(document.getElementById(id));
            if (document.getElementById(id).style.display == "block") {
                document.getElementById(id).style.display = "none";
            } else {
                document.getElementById(id).style.display = "block";
            }    
        }        
    }
    
    return (
        <div className="main-content container">
            <div className="content-top">
                <img src={top_1} alt="Img top" />
            </div>
            <p className="text-begin text-center">Lời Mở Đầu</p>
            <div className="phong-trao">
                <p>Phong trào "Sinh viên 5 tốt" được Trung ương Hội Sinh viên Việt Nam
                phát động nhằm hướng tới việc xây dựng hình ảnh sinh viên toàn diện
                với các tiêu chí: "Học tập tốt", "Đạo đức tốt", "Thể lực tốt", "Tình nguyện tốt",
                "Hội nhập tốt". Bên cạnh đó, Phong trào cũng tạo điều kiện, môi trường, động lực
                cho sinh viên tự giáo dục, tự rèn luyện, tự trau đổi lý tưởng, trang bị những hành
                trang cơ bản để lập thân lập nghiệp, khắc phục những hạn chế, yếu kém của bản thân.
					Qua đó đóng góp cho xã hội nguồn nhân lực chất lượng cao.</p>
                <p>
                    Với mong muốn nhân rộng phong trào "Sinh viên 5 tốt" ra toàn trường cũng như cung
                    cấp những thông tin cần thiết về phong trào SV5T. Hội sinh viên trường gửi đến bạn
                    cuốn Cẩm nang SV5T - Chinh phục 5 tốt - Vững bước tương lai. Hy vọng đây sẽ là người
                    bạn trong suốt con đường chinh phục chiếc cúp SV5T danh giá. Chúc bạn thành công!

				</p>
            </div>
            <div className="row row_tintuc">
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="content-image" onClick={() => showContent('render-one')}>
                        <img src={tron_1_06} alt="tiêu chí đạo đức tốt" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="content-image" onClick={() => showContent('render-two')}>
                        <img src={tron_2_07} alt="tiêu chí học tập tốt" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="content-image" onClick={() => showContent('render-three')}>
                        <img src={tron_3_08} alt="tiêu chí thể lực tốt" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="content-image" onClick={() => showContent('render-four')}>
                        <img src={tron_4_09} alt="tiêu chí tình nguyện tốt" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div className="content-image" onClick={() => showContent('render-five')}>
                        <img src={tron_5_10} alt="tiêu chí hội nhập tốt" />
                    </div>
                </div>
            </div>
            <div id="render-one">
                <div className="render-content-top">
                    <img src={TC_DDT} alt="tiêu chí đạo đức tốt" />
                </div>
                <div className="render-content-bottom">
                    <p>
                        1.1. Tiêu chuẩn bắt buộc:<br />
	- Có lòng yêu nước, trung thành với mục tiêu, lý tưởng cách mạng của Đảng.<br />
	- Không vi phạm pháp luật và các quy chế, nội quy của trường, lớp, quy định
	của địa phương cư trú, nơi công cộng.<br />
	- Điểm rèn luyện đạt từ 80 điểm trở lên (trên thang điểm 100 theo Quy định về
	việc đánh giá công tác học sinh, sinh viên của các trường Đại học, Cao đẳng và Trung
	cấp chuyên nghiệp do Bộ Giáo dục và Đào tạo ban hành).<br />
	- Phân tích chất lượng Đoàn viên cuối năm (đối với Hội viên là Đoàn viên) đạt
	Xuất sắc.<br />
	- Tham gia hoạt động tìm hiểu về văn hóa UEH cấp trường.<br />
	1.2. Tiêu chuẩn khác:<br />
	Đạt ít nhất 01 trong những tiêu chuẩn sau:<br />
	- Là thành viên chính thức đội thi tìm hiểu về chủ nghĩa Mác - Lênin, tư tưởng
	Hồ Chí Minh cấp trường thanh gia các cuộc thi cấp thành trở lên.<br />
	- Tham gia các cuộc thi tìm hiểu về chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí
	Minh quy mô từ cấp trường trở lên.<br />
	- Có tham luận, bài viết được trình bày tại các diễn đàn học thuật về các môn
	khoa học Mác - Lênin, tư tưởng Hồ Chí Minh từ cấp trường trở lên.<br />
	- Là Thanh niên tiên tiến làm theo lời Bác các cấp hoặc là điển hình được biểu
	dương trong việc thực hiện học tập và làm theo tư tưởng, tấm gương đạo đức, phong
	cách Chủ tịch Hồ Chí Minh.<br />
	- Có hành động dũng cảm cứu người bị nạn, bắt cướp, giúp người neo đơn,
	người nghèo, người gặp khó khăn, hoạn nạn trong tình trạng nguy hiểm và cấp thiết
	được khen thưởng, biểu dương từ trường, cấp xã, phường trở lên hoặc được nêu gương
	trên các phương tiện truyền thông đại chúng.
					</p>
                </div>
            </div>
            <div id="render-two">
                <div className="render-content-top">
                    <img src={TC_HTT} alt="tiêu chí học tập tốt" />
                </div>
                <div className="render-content-bottom">
                    <p>
                        2.1. Tiêu chuẩn bắt buộc:<br />
	- Có động cơ, thái độ học tập đúng đắn; không gian lận trong thi cử, không nợ
	môn, học phần hoặc tín chỉ trong năm học.<br />
	- Điểm trung bình chung học tập cả năm học đạt từ 7,7/10 trở lên và 7,5/10 đối
	với sinh viên thuộc khoa Luật.<br />
	2.2. Tiêu chuẩn khác:<br />
	Đạt ít nhất 01 trong những tiêu chuẩn sau:<br />
	- Có đề tài nghiên cứu khoa học đạt giải cấp khoa trong năm học.<br />
	- Có đề tài nghiên cứu khoa học cấp trường tham dự UEH500 hoặc Nhà kinh tế
	trẻ (tham gia với tư cách là chủ nhiệm đề tài hoặc đồng tác giả của đề tài hoặc thành
	viên nhóm nghiên cứu đề tài) và đạt giải trong năm học.<br />
	- Có đề tài nghiên cứu khoa học sinh viên tham gia giải thưởng sinh viên nghiên
	cứu khoa học Euréka hoặc tham gia giải thưởng nghiên cứu khoa học cấp thành phố và
	trung ương.<b />
	- Có ít nhất 01 bài viết về lĩnh vực chuyên môn đang theo học, đăng tải trên các
	sản phẩm của các cơ quan truyền thông uy tín hoặc các báo, tạp chí khoa học chuyên
	ngành của trường hoặc có bài tham luận tham gia các hội thảo khoa học cấp khoa trở
	lên có xác nhận của hội đồng giáo sư.<br />
	- Có sản phẩm sáng tạo được cấp bằng sáng chế, cấp giấy phép xuất bản hoặc
	đạt các giải thưởng từ cấp tỉnh, thành phố trở lên.<br />
	- Là thành viên đội tuyển tham gia các cuộc thi học thuật cấp quốc gia, quốc tế.
	- Đạt giải thưởng trong các cuộc thi ý tưởng sáng tạo từ cấp thành phố trở lên.<br />
	- Đạt giải khuyến khích trở lên trong các cuộc thi chuyên môn/học thuật cấp
	trường, cấp thành, cấp toàn quốc (có giấy chứng nhận) do các hiệp hội ngành nghề,
	các trường đại học, học viện, các cơ quan thông tấn, báo chí tổ chức.<br />
                    </p>
                </div>
            </div>
            <div id="render-three">
                <div className="render-content-top">
                    <img src={TC_TLT} alt="tiêu chí thể lực tốt" />
                </div>
                <div className="render-content-bottom">
                    <p>
                        Đạt ít nhất 01 trong những tiêu chuẩn sau: <br />
	- Đạt danh hiệu “Thanh niên khỏe” từ cấp trường trở lên (tiêu chuẩn cụ thể
	theo Hướng dẫn liên tịch số 87/2006/HDLT-ĐTN-TDTT về tiêu chuẩn thi đua và rèn
	luyện thể dục thể thao của các cấp bộ Đoàn và đoàn viên, thanh niên do Trung ương
	Đoàn TNCS Hồ Chí Minh và Ủy ban Thể dục - Thể thao ban hành).<br />
	- Là Vận động viên tham gia thi đấu tại Hội thao cấp trường, Khoa/KTX/Viện,
	liên Khoa/KTX/Viện (có giấy chứng nhận).<br />
	- Đạt thành tích cao trong các hội thao từ cấp trường trở lên (Giải 1, giải 2, giải
	3, khuyến khích hoặc tương đương).<br />
	- Là thành viên đội tuyển cấp trường, thành phố, quốc gia các môn thể dục thể
	thao. Ưu tiên những sinh viên là vận động viên đạt huy chương trong các giải thi đấu
	cấp quốc gia, khu vực và quốc tế.<br />
	Lưu ý: các môn thể dục thể thao tham gia thi đấu không tính cờ vua, cờ tướng,
	cờ ca rô, thể thao điện tử.<br />
	* Đối với những sinh viên khuyết tật, tiêu chuẩn về thể lực bao gồm: tập thể dục
	hàng ngày và rèn luyện ít nhất 01 môn thể thao dành cho người khuyết tật.<br />
                    </p>
                </div>
            </div>
            <div id="render-four">
                <div className="render-content-top">
                    <img src={TC_TNT} alt="tiêu chí tình nguyện tốt" />
                </div>
                <div className="render-content-bottom">
                    <p>
                        - Đạt ít nhất 01 trong những tiêu chuẩn sau:<br />
	+ Tham gia và nhận giấy chứng nhận hoàn thành một trong các chiến dịch,
	chương trình sau: một trong hai chặng của Chiến dịch Tình nguyện Sinh viên Kinh tế,
	chiến dịch Xuân tình nguyện, chương trình Tiếp sức mùa thi, chương trình Tiếp sức
	đến trường.<br />
	+ Tham gia ít nhất 05 ngày tình nguyện/năm (được tính theo số ngày thực tế
	tham gia các hoạt động tình nguyện cộng dồn. Ví dụ: sinh viên A tham gia 02 ngày
	tình nguyện tại mái ấm nhà mở, 01 ngày thứ bảy tình nguyện, 01 ngày khi tham gia 1
	lần chương trình Hiến máu tình nguyện, 01 ngày Chủ nhật xanh ở những thời điểm
	khác nhau trong năm sẽ được tính đủ tiêu chuẩn).<br />
	+ Có giấy khen hoặc giấy chứng nhận tham gia tích cực chương trình tình
	nguyện cấp trường trở lên.<br />
                    </p>
                </div>
            </div>
            <div id="render-five">
                <div className="render-content-top">
                    <img src={TC_HNT} alt="tiêu chí hội nhập tốt" />
                </div>
                <div className="render-content-bottom">
                    <p>
                        5.1. Về ngoại ngữ:<br />
	Đạt ít nhất 01 trong những tiêu chuẩn sau:<br />
	- Đạt chứng chỉ ngoại ngữ trình độ TOEIC 500 hoặc tương đương trở lên (Áp
	dụng cho sinh viên năm 1, 2) và TOEIC 600 hoặc tương đương trở lên (Áp dụng cho
	sinh viên năm 3, 4). Riêng đối tượng sinh viên chuyên ngành Ngoại ngữ: TOEIC 600
	(Áp dụng cho sinh viên năm 1, 2), TOEIC 700(Áp dụng cho sinh viên năm 3, 4). Các
	chứng chỉ ngoại ngữ khác hoặc ngôn ngữ khác tương tương.<br />
	- Tham gia và đạt giải khuyến khích trở lên các cuộc thi kiến thức ngoại ngữ
	(được hiểu là cuộc thi tìm hiểu ngoại ngữ) từ cấp trường trở lên.<br />
	- Tham gia và đạt top 20 hàng tuần cuộc thi Olympic tiếng Anh học sinh – sinh
	viên toàn quốc do trung ương HSV tổ chức.<br />
	* Về chứng nhận ngoại ngữ: chấp nhận các chứng nhận, chứng chỉ ngoại ngữ
	do Trung tâm ngoại ngữ của trường trong các đợt thi thử, thi xếp lớp, thi cuối khóa;
	các chứng chỉ của các Trung tâm ngoại ngữ liên kết với Đoàn - Hội Sinh viên trường
	hoặc các trung tâm của các trường đại học trên địa bàn Tp. HCM.<br />
	5.2. Về kỹ năng:<br />
	Đạt ít nhất 01 trong những tiêu chuẩn sau:<br />
	- Tham gia và hoàn thành ít nhất 02 khóa trang bị kỹ năng thực hành xã hội.
	- Điểm trung bình học phần môn Kỹ năng mềm đạt từ 8,0/10 trở lên.<br />
	- Đạt giải trong các cuộc thi về kỹ năng từ cấp trường trở lên. (Giải 1, giải 2,
	giải 3, khuyến khích hoặc tương đương).<br />
	- Là giảng viên các lớp huấn luyện kỹ năng từ cấp trường trở lên.<br />
	- Được Đoàn Thanh niên - Hội Sinh viên từ cấp trường trở lên khen thưởng về
	thành tích xuất sắc trong công tác Đoàn và phong trào thanh niên hoặc công tác Hội và
	phong trào sinh viên.<br />
	5.3. Về hoạt động hội nhập: Tham gia tích cực ít nhất 01 hoạt động về hội
	nhập do cấp trường trở lên tổ chức.<br />
	* Ngoài các tiêu chuẩn trên, ưu tiên xét chọn những sinh viên có các tiêu
	chuẩn sau:<br />
	- Tuyên truyền và giới thiệu ít nhất 01 (một) sinh viên trong năm gia nhập tổ
	chức Hội (đối với Hội viên), giúp đỡ và giới thiệu ít nhất 01 (một) sinh viên (đối với
	trường không có tổ chức Hội) hoặc 01 (một) Hội viên (đối với những trường có tổ
	chức Hội) kết nạp vào Đoàn TNCS Hồ Chí Minh (không áp dụng đối với các Chi
	Đoàn, Chi Hội 100% Đoàn viên, Hội viên).<br />
	- Tham gia hiến máu tình nguyện ít nhất 02 lần trong năm hoặc tham gia tích
	cực vào câu lạc bộ hoặc các đội, nhóm tuyên truyền, vận động hiến máu tình nguyện
	(có xác nhận của câu lạc bộ, đội, nhóm tham gia).<br />
	- Là thanh niên tiêu biểu được biểu dương, khen thưởng trên các lĩnh vực tại địa
	phương, đơn vị hoặc được nêu gương trên các phương tiện truyền thông đại chúng.<br />
	- Tham gia và đạt giải khuyến khích trở lên trong các cuộc thi tìm hiểu về văn
	hóa, lịch sử, xã hội trong nước và thế giới từ cấp trường trở lên.<br />

                    </p>
                </div>
            </div>
        </div>
    );
}
export default News;