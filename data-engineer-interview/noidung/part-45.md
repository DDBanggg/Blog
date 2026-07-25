# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 43)

Nguồn: https://www.threads.com/@3dongcode/post/DXWxVmGFOW1

Machine Learning thay đổi Data Engineering như thế nào?

Chi tiết ⬇

1. Từ "Pipeline tĩnh" sang "Pipeline động"

Truyền thống, data engineer xây pipeline để chuyển dữ liệu từ A → B một cách cố định. ML đòi hỏi pipeline phải linh hoạt hơn — dữ liệu cần được tái huấn luyện định kỳ, feature phải được cập nhật liên tục, và pipeline phải phục vụ cả training lẫn serving (inference).

2. Xuất hiện khái niệm Feature Engineering & Feature Store

ML yêu cầu dữ liệu được biến đổi thành features — các đặc trưng có ý nghĩa với model. Data engineer giờ không chỉ chuyển dữ liệu mà còn phải:

Tính toán và lưu trữ features tái sử dụng (Feature Store như Feast, Tecton)

Đảm bảo training-serving consistency — features lúc train phải giống y chang lúc predict

Quản lý point-in-time correctness để tránh data leakage

3. Data Quality trở nên critical hơn

"Garbage in, garbage out" đặc biệt nguy hiểm với ML. Data engineer phải đầu tư nhiều hơn vào:

Data validation tự động (Great Expectations, Soda)

Schema evolution — model bị ảnh hưởng nặng nếu schema thay đổi đột ngột

Data drift detection — phân phối dữ liệu thay đổi theo thời gian làm model xuống cấp

4. Sự ra đời của MLOps & vai trò mới

Data engineer phải phối hợp chặt với ML engineer trong vòng đời:

Data Ingestion → Feature Engineering → Model Training

→ Model Serving → Monitoring → Re-training

Đây là lý do MLOps (và vai trò ML Platform Engineer) ra đời — chuyên xây hạ tầng cho toàn bộ vòng đời này.

5. Yêu cầu về Scale và Real-time tăng mạnh

ML serving thường cần low-latency (< 100ms) → đòi hỏi pipeline streaming thay vì batch

Training model lớn cần distributed compute (Spark, Ray, Dask)

Data engineer phải thiết kế hệ thống phục vụ cả batch training lẫn real-time inference song song

6. Metadata và Lineage quan trọng hơn bao giờ hết

Khi model cho kết quả sai, câu hỏi đầu tiên là "Dữ liệu nào đã được dùng để train?". Data engineer cần đảm bảo:

Data lineage đầy đủ (dữ liệu đến từ đâu, qua biến đổi gì)

Experiment tracking (MLflow, W&B) để tái hiện kết quả

Model versioning gắn liền với data versioning
