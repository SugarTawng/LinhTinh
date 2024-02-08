import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const getAndRenderQuantityStats = async () => {
      try {
        // Gọi API để lấy dữ liệu thống kê
        const response = await fetch(
          "http://localhost:3001/v1/books/quantityStatistic"
        );
        const data = await response.json();
        console.log("data", data);

        // Trích xuất quantities và counts trực tiếp từ dữ liệu API
        const quantities = data.map((item) => item.quantity);
        const counts = data.map((item) => item.count);

        console.log(`count`, counts);

        // Sử dụng dữ liệu từ API để cập nhật biểu đồ
        const chartData = {
          labels: quantities, // Sử dụng quantities thay vì ["January", "February", "March", "April", "May"]
          datasets: [
            {
              label: "Change of number titles",
              data: counts, // Sử dụng counts thay vì [65, 59, 80, 81, 56]
              fill: false,
              borderColor: "rgba(75, 192, 192, 1)",
              tension: 0.1,
            },
          ],
        };

        const options = {
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        };

        const myChart = new Chart(chartRef.current, {
          type: "line",
          data: chartData,
          options: options,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getAndRenderQuantityStats();

    // Không cần cleanup function vì biểu đồ sẽ tự hủy khi component unmounts
  }, []); // Chú ý: Dependency array trống để đảm bảo useEffect chỉ chạy một lần khi component mount

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default LineChart;
