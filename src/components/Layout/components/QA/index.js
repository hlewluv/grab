import React from "react";
import classNames from "classnames/bind";  // Import classNames
import styles from "./QA.module.scss";  // Import SCSS module

// Kết nối classNames với SCSS module
const cx = classNames.bind(styles);

const GrabFoodInfo = () => {
  // Dữ liệu mô phỏng
  const content = [
    {
      title: "GrabFood là gì?",
      description:
        "Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam.",
    },
    {
      title: "Làm cách nào để đặt đồ ăn ở Việt Nam?",
      description:
        "Chúng tôi chỉ biết một điều duy nhất, đó là đồ ăn, vậy nên tất nhiên chúng tôi cung cấp dịch vụ này rồi. Xin lưu ý, mặc dù chúng tôi là đối tác giao đồ ăn phục vụ 24x7, nhưng một số nhà hàng trong danh mục của chúng tôi có thể hạn chế giao đồ ăn khuya hoặc có thể không phục vụ đối với các đơn đặt hàng. Tuy nhiên, chúng tôi đã liệt kê danh sách những nhà hàng phục vụ nhu cầu ăn khuya của bạn trong mục Late Night Delivery (Giao hàng khuya).",
    },
    {
      title: "GrabFood có cung cấp dịch vụ giao đồ ăn 24x7 không?",
      description:
        "Có, GrabFood hoạt động suốt 24/7, luôn sẵn sàng phục vụ bạn bất kỳ lúc nào.",
    },
    {
      title: "GrabFood có chấp nhận tiền mặt không?",
      description:
        "Tất nhiên rồi, hãy chăm sóc những người thân yêu của mình bằng cách gửi những món ăn mà họ yêu thích đến tận nhà. Bạn chỉ cần cập nhật địa chỉ giao hàng và tên người nhận trước khi đặt đơn hàng của bạn.",
    },
    {
      title: "GrabFood có tính phí giao hàng không?",
      description:
        "Chúng tôi có gì trên GrabFood? Chúng tôi tự hào có nhiều nhà hàng và món ăn nhất so với bất kỳ ứng dụng giao đồ ăn nào ở Việt Nam. Bạn có thể lựa chọn trong số hàng nghìn nhà hàng trên GrabFood Việt Nam. Bạn có thể đặt đồ ăn trực tuyến từ tất cả các điểm ăn uống yêu thích của Burger King, Jollibee, KFC, McDonalds, Long John Silver, Pastamania, Dominos Pizza, Pizza Hut, Subway GrabFood cũng có mã khuyến mãi, ưu đãi và giảm giá có hạn dành riêng cho các nhà hàng trong danh mục. Bạn có thể được hưởng chiết khấu lớn và hàng loạt ưu đãi khác cho đơn đặt đồ ăn của mình. Giờ thì đặt đồ ăn thôi!",
    },
  ];

  return (
    <div className={cx("grabfoodContainer")}>  
      {content.map((item, index) => (
        <div 
          className={cx("card", { highlight: index % 2 === 0 })}  
          key={index}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <hr
                style={{
                    marginTop: '10px',
                    borderColor: 'rgba(242, 238, 238, 0.95)',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    position: 'relative',
                }}
            />
        </div>
      ))}
    </div>
  );
};

export default GrabFoodInfo;
