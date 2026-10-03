let registeredMembers = 0;
let totalRevenue = 0;
let checkInCount = 0;

let memberRegistered = false;
let memberName = "";
let memberCard = "";
let membershipPackage = "";
let months = 0;
let ptSessions = 0;

const currentYear = new Date().getFullYear();

do {
    console.log("\n======================================");
    console.log("       GYM FITNESS - QUẢN LÝ");
    console.log("======================================");
    console.log("1. Đăng ký hội viên mới");
    console.log("2. Tính tiền gói tập");
    console.log("3. Quét mã thẻ Check-in");
    console.log("4. Báo cáo và thoát");
    console.log("======================================");

    let choice = prompt("Nhập lựa chọn: ");

    switch (choice) {
        case "1":
            memberName = prompt("Nhập họ tên hội viên: ");

            memberName = memberName.trim();

            if (memberName === "") {
                console.log("Họ tên không được để trống!");
                break;
            }

            memberCard = prompt("Nhập mã thẻ hội viên: ");

            memberCard = memberCard.trim().toUpperCase();

            if (!memberCard.startsWith("GYM-")) {
                console.log("Mã thẻ phải bắt đầu bằng GYM-!");
                break;
            }

            membershipPackage = prompt(
                "Nhập gói tập (STANDARD/VIP): "
            );

            membershipPackage = membershipPackage.trim().toUpperCase();

            if (
                membershipPackage !== "STANDARD" &&
                membershipPackage !== "VIP"
            ) {
                console.log("Gói tập không hợp lệ!");
                break;
            }

            registeredMembers++;
            memberRegistered = true;

            console.log("\nĐĂNG KÝ THÀNH CÔNG");
            console.log("Họ tên: " + memberName);
            console.log("Mã thẻ: " + memberCard);
            console.log("Gói tập: " + membershipPackage);

            break;

        case "2":
            if (!memberRegistered) {
                console.log(
                    "Vui lòng đăng ký hội viên trước khi tính tiền!"
                );
                break;
            }

            months = Number(
                prompt("Nhập số tháng đăng ký: ")
            );

            if (months <= 0 || isNaN(months)) {
                console.log("Số tháng không hợp lệ!");
                break;
            }

            ptSessions = Number(
                prompt("Nhập số buổi PT riêng: ")
            );

            if (ptSessions < 0 || isNaN(ptSessions)) {
                console.log("Số buổi PT không hợp lệ!");
                break;
            }

            let monthlyPrice = 0;

            if (membershipPackage === "STANDARD") {
                monthlyPrice = 500000;
            }

            if (membershipPackage === "VIP") {
                monthlyPrice = 800000;
            }

            let membershipMoney = monthlyPrice * months;
            let ptMoney = ptSessions * 300000;
            let discountRate = 0;

            if (months >= 12) {
                discountRate = 0.25;
            } else if (months >= 6) {
                discountRate = 0.15;
            }

            let discountMoney = membershipMoney * discountRate;
            let finalMoney = membershipMoney - discountMoney + ptMoney;

            totalRevenue += finalMoney;

            console.log("\n======================================");
            console.log("             HÓA ĐƠN GYM");
            console.log("======================================");
            console.log("Hội viên: " + memberName);
            console.log("Gói tập: " + membershipPackage);
            console.log("Số tháng: " + months);
            console.log(
                "Tiền gói tập: " +
                membershipMoney.toLocaleString("vi-VN") +
                " VNĐ"
            );
            console.log(
                "Tiền PT: " +
                ptMoney.toLocaleString("vi-VN") +
                " VNĐ"
            );
            console.log(
                "Giảm giá: " +
                (discountRate * 100) +
                "%"
            );
            console.log(
                "Tiền giảm: " +
                discountMoney.toLocaleString("vi-VN") +
                " VNĐ"
            );
            console.log("--------------------------------------");
            console.log(
                "TỔNG THANH TOÁN: " +
                finalMoney.toLocaleString("vi-VN") +
                " VNĐ"
            );
            console.log("======================================");

            break;

        case "3":
            let checkInCard = prompt(
                "Quét mã thẻ hội viên: "
            );

            checkInCard = checkInCard.trim().toUpperCase();

            if (!checkInCard.startsWith("GYM-")) {
                console.log("Mã thẻ không hợp lệ!");
                break;
            }

            if (!checkInCard.endsWith(currentYear.toString())) {
                console.log(
                    "Mã thẻ phải kết thúc bằng năm " +
                    currentYear +
                    "!"
                );
                break;
            }

            checkInCount++;

            console.log("\nCHECK-IN THÀNH CÔNG!");
            console.log("Mã thẻ: " + checkInCard);
            console.log("Năm: " + currentYear);

            break;

        case "4":
            console.log("\n======================================");
            console.log("       BÁO CÁO TỔNG KẾT CA");
            console.log("======================================");
            console.log(
                "Số hội viên đăng ký: " +
                registeredMembers
            );
            console.log(
                "Số lượt Check-in: " +
                checkInCount
            );
            console.log(
                "Tổng doanh thu: " +
                totalRevenue.toLocaleString("vi-VN") +
                " VNĐ"
            );
            console.log("======================================");
            console.log("Đã kết thúc ca làm việc.");

            break;

        default:
            console.log(
                "Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 4."
            );
    }

} while (choice !== "4");