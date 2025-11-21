import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Barista Pro Espresso Machine",
    price: 5999,
    category: "machines",
    description: "专业级家用浓缩咖啡机，带PID控温系统和内置磨豆机。",
    image: "https://images.unsplash.com/photo-1570589877965-c807c45102d8?q=80&w=800&auto=format&fit=crop",
    details: [
      "快速加热系统",
      "内置锥形磨刀",
      "PID 数字温控",
      "低压预浸泡功能"
    ]
  },
  {
    id: "2",
    name: "Precision Brewer Thermal",
    price: 2499,
    category: "machines",
    description: "全自动滴滤咖啡机，精准控制水温和流速，还原手冲风味。",
    image: "https://images.unsplash.com/photo-1517080319656-58f382e278cb?q=80&w=800&auto=format&fit=crop",
    details: [
      "6种冲煮模式",
      "PID 温控",
      "不锈钢保温壶",
      "支持单杯冲煮"
    ]
  },
  {
    id: "3",
    name: "Niche Zero Grinder",
    price: 4200,
    category: "grinders",
    description: "零残粉单剂量磨豆机，专为精品咖啡爱好者设计。",
    image: "https://images.unsplash.com/photo-1585551661150-22335c5c4f32?q=80&w=800&auto=format&fit=crop",
    details: [
      "63mm 锥刀",
      "零残粉设计",
      "静音运行",
      "无级研磨调节"
    ]
  },
  {
    id: "4",
    name: "Timemore C3 手摇磨豆机",
    price: 368,
    category: "grinders",
    description: "高性价比手磨，S2C切割磨芯，研磨均匀且省力。",
    image: "https://images.unsplash.com/photo-1515696955266-4f67e13219e8?q=80&w=800&auto=format&fit=crop",
    details: [
      "专利 S2C 磨芯",
      "全铝合金机身",
      "双轴承定位",
      "便携设计"
    ]
  },
  {
    id: "5",
    name: "V60 陶瓷滤杯套装",
    price: 128,
    category: "accessories",
    description: "经典 V60 手冲滤杯，包含分享壶和滤纸的入门套装。",
    image: "https://images.unsplash.com/photo-1544566839-6296326c2847?q=80&w=800&auto=format&fit=crop",
    details: [
      "日本有田烧陶瓷",
      "螺旋肋骨设计",
      "包含 40 张滤纸",
      "耐热玻璃分享壶"
    ]
  },
  {
    id: "6",
    name: "Fellow Stagg EKG 手冲壶",
    price: 1099,
    category: "accessories",
    description: "极简设计温控手冲壶，精准控温，水流稳定。",
    image: "https://images.unsplash.com/photo-1551898604-877786f56260?q=80&w=800&auto=format&fit=crop",
    details: [
      "PID 精准温控",
      "天鹅颈壶嘴",
      "保温功能",
      "内置计时器"
    ]
  },
  {
    id: "7",
    name: "Ethiopia Yirgacheffe",
    price: 128,
    category: "beans",
    description: "埃塞俄比亚耶加雪菲，水洗处理，花香与柑橘风味。",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop",
    details: [
      "产地：埃塞俄比亚",
      "处理法：水洗",
      "烘焙度：浅烘",
      "风味：茉莉花、柠檬、红茶"
    ]
  },
  {
    id: "8",
    name: "Colombia Huila",
    price: 115,
    category: "beans",
    description: "哥伦比亚慧兰，均衡醇厚，带有坚果和焦糖的甜感。",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800&auto=format&fit=crop",
    details: [
      "产地：哥伦比亚",
      "处理法：水洗",
      "烘焙度：中深烘",
      "风味：坚果、黑巧克力、焦糖"
    ]
  },
  {
    id: "9",
    name: "Acaia Lunar Scale",
    price: 1850,
    category: "accessories",
    description: "防水意式电子秤，反应灵敏，通过 APP 记录冲煮曲线。",
    image: "https://images.unsplash.com/photo-1533583466011-4d976566929f?q=80&w=800&auto=format&fit=crop",
    details: [
      "防水设计",
      "0.1g 精度",
      "蓝牙连接",
      "自动计时功能"
    ]
  },
  {
    id: "10",
    name: "Chemex 经典手冲壶",
    price: 380,
    category: "accessories",
    description: "兼具美学与功能的经典设计，带来纯净清透的咖啡风味。",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    details: [
      "高硼硅耐热玻璃",
      "木质腰身皮绳",
      "独特加厚滤纸",
      "6人份容量"
    ]
  }
];
