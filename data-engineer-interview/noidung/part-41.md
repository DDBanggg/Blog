# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 40)

Nguồn: https://www.threads.com/@3dongcode/post/DXJ5cu_FChu

Trong Python *args và **kwargs được dùng để làm gì?

Chi tiết ⬇

*args — Tham số vị trí không xác định

*args cho phép hàm nhận bất kỳ số lượng đối số nào theo vị trí (positional arguments). Bên trong hàm, args sẽ là một tuple.

Ví dụ dễ hiểu: Bạn viết một hàm tính tổng, nhưng không biết người dùng sẽ truyền vào bao nhiêu số — 2 số, 5 số, hay 100 số. Dùng *args giải quyết được điều đó.

**kwargs — Tham số từ khóa không xác định

**kwargs cho phép hàm nhận bất kỳ số lượng đối số nào theo tên (keyword arguments). Bên trong hàm, kwargs sẽ là một dictionary với dạng {tên: giá_trị}.

Ví dụ: Bạn muốn ghi log thông tin nhưng không biết trước người dùng sẽ truyền những trường nào.

Ứng dụng thực tế trong Data Engineering

Trong DE, hai cú pháp này xuất hiện rất nhiều, đặc biệt ở các trường hợp:

Viết hàm pipeline tổng quát (nhận nhiều bảng, nhiều file) - *args

Truyền config động vào Spark, Airflow, SQLAlchemy - **kwargs

Wrapper/decorator cho retry logic, logging - Cả hai

Gọi hàm với dict config có sẵn - **config_dict để unpack

Tóm lại một câu:

*args gom các giá trị rời thành tuple, **kwargs gom các cặp tên-giá trị thành dictionary — cả hai giúp hàm linh hoạt hơn khi không biết trước số lượng đầu vào.
