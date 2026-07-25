# Series Tổng hợp các câu hỏi phỏng vấn Phần 5: Data Engineer (phần 5)

Nguồn: https://www.threads.com/@3dongcode/post/DUqPMKBE1Rm

Làm thế nào để validate (kiểm tra tính hợp lệ) việc di chuyển dữ liệu từ database này sang database khác?

Chi tiết ⬇

1. Validation trước khi migrate (Pre-migration) So sánh schema: Kiểm tra cấu trúc bảng, cột, kiểu dữ liệu, constraints, indexes có khớp không. Verify foreign keys, triggers, stored procedures được map đúng. Đảm bảo character encoding tương thích (UTF-8, Latin1...). Đếm và phân tích dữ liệu nguồn: Count tổng số records từng bảng. Identify null values, duplicates, data anomalies. Lấy sample data để test migration logic.

2. Validation trong quá trình migrate (During migration) Monitoring real-time: Track số records đã migrate vs tổng số. Log errors, warnings, skipped records. Measure performance metrics (throughput, latency). Checkpoint validation: Sau mỗi batch, verify data integrity. So sánh checksums/hashes của data chunks.

3. Validation sau khi migrate (Post-migration) A. Row Count Validation So sánh tổng số rows giữa source và destination cho từng bảng. Nếu khác biệt → investigate ngay. B. Data Comparison Full comparison: So sánh từng field của sample records (10-20% data). Hash comparison: Generate hash/checksum cho mỗi row, so sánh giữa 2 DB. Aggregation checks: So sánh SUM, AVG, MIN, MAX của các cột số. Unique values: Verify distinct values của key columns.

C. Referential Integrity Check foreign key relationships còn valid không. Verify orphaned records (child records không có parent). Test joins giữa các bảng. D. Business Logic Validation Run existing business queries trên cả 2 DB, compare results. Test critical reports/dashboards. Verify calculated fields, derived data.

E. Data Type & Format Validation Check dates có bị timezone issues không. Verify number precision/scale. String truncation, encoding issues. Boolean mapping (1/0 vs true/false).

4. Automated Testing Approach Viết test scripts: Automated SQL queries để compare data. Unit tests cho transformation logic. Integration tests cho end-to-end flows. Reconciliation reports: Generate detailed reports về differences. Categorize discrepancies (missing, modified, extra records). Provide drill-down capability.

5. Rollback & Contingency Giữ backup của source DB. Document lại các issues phát hiện. Có plan rollback nếu validation fail nghiêm trọng. Parallel run (chạy song song 2 DB) một thời gian.

6. Best Practices Start small: Test với subset nhỏ trước khi full migration. Incremental validation: Validate theo từng module/bảng. Document everything: Ghi lại findings, assumptions, exceptions. Involve stakeholders: Let business users validate critical data. Performance testing: Ensure new DB performs as expected under load. Lưu ý quan trọng: Không có one-size-fits-all approach. Strategy phụ thuộc vào data volume, complexity, downtime tolerance, và business requirements cụ thể.
