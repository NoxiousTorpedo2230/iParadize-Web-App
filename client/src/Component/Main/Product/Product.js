const Products = {
  iPhones: [
    {
      name: "iPhone 16 Pro Max",
      price: "1,49,900",
      discount: "5%",
      rating: "★★★★★",
      image: "https://i.ibb.co/3Y5R04Yg/iphone-16-pro-max.jpg",
      features: "Titanium body, A18 Pro chip, 48MP camera",
    },
    {
      name: "iPhone 16e",
      price: "74,900", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★★",
      image: "https://i.ibb.co/ynzJVGH7/i-Phone-16e.jpg", // Placeholder link
      features: "A16 Bionic chip, 6.1-inch Super Retina XDR display, Advanced camera system, 5G connectivity, Ceramic Shield front cover",
    },    
    {
      name: "iPhone 16",
      price: "1,29,900",
      discount: "7%",
      rating: "★★★★★",
      image: "https://i.ibb.co/g09CX40/iphone-16.jpg",
      features: "Dynamic Island, A18 chip, USB-C port",
    },
    {
      name: "iPhone 15 Pro Max",
      price: "1,39,900",
      discount: "6%",
      rating: "★★★★★",
      image: "https://i.ibb.co/6JW9sNGw/iphone-15-pro-max.jpg",
      features: "Titanium design, A17 Pro chip, 5x telephoto zoom",
    },
    {
      name: "iPhone 15",
      price: "1,09,900",
      discount: "8%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/nqZ3C8xS/iphone-15.jpg",
      features: "Dynamic Island, A16 chip, USB-C port",
    },
    {
      name: "iPhone 14 Pro Max",
      price: "91,067",
      discount: "10%",
      rating: "★★★★★",
      image: "https://i.ibb.co/BHDFCFJF/iphone-14-pro-max.jpg",
      features:
        "Dynamic Island, Always-On display, A16 Bionic chip, 48MP camera",
    },
    {
      name: "iPhone 14",
      price: "66,317",
      discount: "12%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/SXrpqtMH/iphone-14.jpg",
      features:
        "A15 Bionic chip, Super Retina XDR display, Ceramic Shield front cover",
    },
    {
      name: "iPhone 13 Pro",
      price: "82,967",
      discount: "8%",
      rating: "★★★★★",
      image: "https://i.ibb.co/S791DBhG/iphone-13-pro.jpg",
      features:
        "ProMotion 120Hz display, A15 Bionic chip, 3x telephoto lens, LiDAR scanner",
    },
    {
      name: "iPhone 13 Mini",
      price: "58,017",
      discount: "15%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/TDgTq01R/iphone-mini-13.jpg",
      features:
        "Compact size, A15 Bionic chip, Dual-camera system, Night mode",
    },
    {
      name: "iPhone 12",
      price: "49,717",
      discount: "20%",
      rating: "★★★☆☆",
      image: "https://i.ibb.co/Kp9pyzr7/iphone-12.jpg",
      features: "A14 Bionic chip, Ceramic Shield, Dolby Vision HDR recording",
    },
    {
      name: "iPhone 11",
      price: "45,567",
      discount: "16%",
      rating: "★★★☆☆",
      image: "https://i.ibb.co/fd7McZVF/iphone-11.jpg",
      features:
        "A13 Bionic chip, Dual-camera system, Night mode, Liquid Retina HD display",
    },
    {
      name: "iPhone SE (2022)",
      price: "35,607",
      discount: "10%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/jPWQvZvw/iphone-se-2022.jpg",
      features: "Compact design, A15 Bionic chip, Touch ID, 5G support",
    },
  ],
  iWatches: [
    {
      name: "Apple Watch Ultra",
      price: "89,900",
      discount: "5%",
      rating: "★★★★★",
      image: "https://i.ibb.co/BHLyRCkF/Apple-Watch-Ultra.jpg",
      features: "49mm case, Always-On Retina display, Dual-frequency GPS",
    },
    {
      name: "Apple Watch SE",
      price: "29,900",
      discount: "10%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/Hp458NZV/Apple-Watch-SE.jpg",
      features: "44mm case, Retina display, Fitness tracking, Family setup",
    },
    {
      name: "Apple Watch Series 7",
      price: "37,900",
      discount: "15%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/r2sg6dxr/Apple-Watch-Series-7.jpg",
      features: "45mm case, Always-On Retina display, Heart monitoring",
    },
    {
      name: "Apple Watch Series 8",
      price: "41,900",
      discount: "7%",
      rating: "★★★★★",
      image: "https://i.ibb.co/hxRm6vKf/Apple-Watch-Series-8.jpg",
      features: "41mm case, Blood Oxygen app, ECG, Sleep monitoring",
    },
    {
      name: "Apple Watch Ultra 2",
      price: "94,900",
      discount: "5%",
      rating: "★★★★★",
      image: "https://i.ibb.co/CsBN91Kn/Apple-Watch-Ultra-2.jpg", // Placeholder link
      features: "49mm case, Micro-LED Always-On Retina display, Satellite connectivity, Advanced health sensors, Dual-band GPS, 72-hour battery life",
    },
    {
      name: "Apple Watch Series 10",
      price: "79,900",
      discount: "6%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/nMqtvgjh/i-Watch-Titanium-Edge.jpg", // Placeholder link
      features: "45mm case, LTPO OLED Retina display, Enhanced fitness tracking, Blood oxygen monitoring, Water-resistance up to 50m",
    },
    {
      name: "Apple Watch Series 9 [GPS + Cellular 41mm]",
      price: "79,900",
      discount: "6%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/sv5BLx4s/Apple-Watch-Series-9.jpg", // Placeholder link
      features: "Graphite Stainless Steel Case, Midnight Sport Band (M/L), Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
    },
    {
      name: "Apple Watch Series 7 [GPS + Cellular, 45mm]",
      price: "69,900",
      discount: "5%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/pmjszPc/Apple-Watch-Series-7-GPS-Cellular-45mm.jpg", // Placeholder link
      features: "Graphite Stainless Steel Case, Graphite Milanese Loop, Always-On Retina Display, Blood Oxygen & ECG Apps, Fitness Tracker, Water Resistant",
    },
    
  ],
  iPads: [
    {
      name: "iPad Pro 12.9-inch",
      price: "1,10,900",
      discount: "6%",
      rating: "★★★★★",
      image: "https://i.ibb.co/YFJh18Kx/i-Pad-Mini.jpg",
      features: "M2 chip, Liquid Retina XDR display, 5G support",
    },
    {
      name: "iPad Air",
      price: "54,900",
      discount: "10%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/hFSPpMqV/iPad-Air.jpg",
      features: "M1 chip, Liquid Retina display, Center Stage",
    },
    {
      name: "iPad 10th Generation",
      price: "44,900",
      discount: "8%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/1GBCrrkf/i-Pad-10th-Generation.jpg",
      features: "A15 Bionic chip, 8.3-inch display, 5G support",
    },
    {
      name: "iPad Pro 11-inch",
      price: "87,900",
      discount: "5%",
      rating: "★★★★★",
      image: "https://i.ibb.co/b8L62GP/i-Pad-Pro-11-inch.jpg",
      features: "M2 chip, Liquid Retina display, ProMotion",
    },
    {
      name: "iPad 9th Generation",
      price: "30,900",
      discount: "12%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/W4LnRZqW/i-Pad-9th-Generation.jpg",
      features: "A13 Bionic chip, 10.2-inch display, Center Stage",
    },
  ],
  Macs: [
    {
      name: "MacBook Air M2",
      price: "1,19,900",
      discount: "8%",
      rating: "★★★★★",
      image: "https://i.ibb.co/nNdbr2Kq/Mac-Book-Air-M2.jpg",
      features: "13.6-inch Retina display, M2 chip, 18-hour battery life",
    },
    {
      name: "MacBook Pro 14-inch",
      price: "1,94,900",
      discount: "5%",
      rating: "★★★★★",
      image: "https://i.ibb.co/YJKRZps/Mac-Book-Pro-14-inch.jpg",
      features:
        "M2 Pro chip, Liquid Retina XDR display, 22-hour battery life",
    },
    {
      name: "Mac Mini M2",
      price: "59,900",
      discount: "10%",
      rating: "★★★★★",
      image: "https://i.ibb.co/KzQVGgZh/Mac-Mini-M2.jpg",
      features: "M2 chip, Compact design, 8-core CPU",
    },
    {
      name: "iMac 24-inch",
      price: "1,29,900",
      discount: "6%",
      rating: "★★★★★",
      image: "https://i.ibb.co/M5xyCq5Q/i-Mac-24-inch.jpg",
      features:
        "M2 Max chip, Liquid Retina XDR display, Professional-grade performance",
    },
    {
      name: "MacBook Air 13-inch",
      price: "1,19,900", // Example price
      discount: "7%", // Include if applicable
      rating: "★★★★★",
      image: "https://i.ibb.co/sdSt7Syn/Mac-Book-Air-13-inch.png", // Placeholder link
      features: "M2 chip, Retina display, Up to 18 hours battery life, Lightweight design, Magic Keyboard",
    },
    {
      name: "iMac",
      price: "1,29,900", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★★",
      image: "https://i.ibb.co/wV0qvXs/imac-digitalmat-gallery.png", // Placeholder link
      features: "24-inch 4.5K Retina display, M1 chip, Seven vibrant color options, Studio-quality mics, Magic Keyboard included",
    },
    {
      name: "Mac mini",
      price: "59,900", // Example price
      discount: "6%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/vCXsfRyM/Mac-mini.png", // Placeholder link
      features: "Compact design, M2 or M2 Pro chip options, High performance, Multiple connectivity ports",
    },
    {
      name: "Mac Studio",
      price: "2,09,900", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★★",
      image: "https://i.ibb.co/Q7Z6qPtK/Mac-Studio.png", // Placeholder link
      features: "M2 Ultra chip, Advanced cooling system, High-speed connectivity, Ultra-compact form factor",
    },
    {
      name: "Studio Display",
      price: "1,59,900", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/fdts9jwL/Studio-Display.png", // Placeholder link
      features: "27-inch 5K Retina display, True Tone, Anti-reflective coating, Built-in camera and mics",
    },
  ],
  airPods: [
    {
      name: "AirPods Pro (2nd Generation)",
      price: "26,900",
      discount: "5%",
      rating: "★★★★★",
      image: "https://i.ibb.co/XrDVnQ9R/Air-Pods-Pro-2nd-Generation.jpg",
      features:
        "Active Noise Cancellation, Spatial Audio, MagSafe charging case",
    },
    {
      name: "AirPods Max",
      price: "59,900",
      discount: "7%",
      rating: "★★★★★",
      image: "https://i.ibb.co/XZgbzp5Y/Air-Pods-Max.jpg",
      features:
        "Over-ear design, Active Noise Cancellation, High-Fidelity audio",
    },
    {
      name: "AirPods (3rd Generation)",
      price: "19,900",
      discount: "10%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/qMqZcZZv/Air-Pods-3rd-Generation.jpg",
      features: "Spatial Audio, Adaptive EQ, MagSafe charging",
    },
    {
      name: "HomePod mini",
      price: "9,900", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/wNGSTJZZ/homepod-mini-select-orange-202110-FV1.jpg", // Placeholder link
      features: "Compact smart speaker, Rich 360-degree sound, Siri integration, Compatible with Apple ecosystem",
    },
    {
      name: "HomePod - Midnight",
      price: "28,900", // Example price
      discount: "7%", // Include if applicable
      rating: "★★★★★",
      image: "https://i.ibb.co/vSR8WTN/Home-Pod-Midnight.png", // Placeholder link
      features: "Midnight color finish, Exceptional audio quality, Spatial audio support, Smart home hub functionality",
    },
    {
      name: "Beats Pill — Wireless Bluetooth® Speaker — Champagne Gold",
      price: "19,900", // Example price
      discount: "6%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/Z1xYgSPt/Beats-Pill-Wireless-Bluetooth-Speaker-Champagne-Gold.jpg", // Placeholder link
      features: "Portable design, Wireless Bluetooth connectivity, Premium Champagne Gold finish, Enhanced bass",
    },
    {
      name: "Beats Solo 4 — On-Ear Wireless Headphones – Cloud Pink",
      price: "17,900", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/SXpcvXyL/Beats-Solo-4-On-Ear-Wireless-Headphones-Cloud-Pink.jpg", // Placeholder link
      features: "Cloud Pink finish, On-ear wireless design, High-performance sound, Long battery life",
    },
    {
      name: "Beats Flex – All-Day Wireless Earphones - Yuzu Yellow",
      price: "5,900", // Example price
      discount: "4%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/67yqDvDS/Beats-Flex-All-Day-Wireless-Earphones-Yuzu-Yellow.jpg", // Placeholder link
      features: "Yuzu Yellow color, All-day comfort, Magnetic earbuds, USB-C charging",
    },
    {
      name: "Beats Fit Pro True Wireless Earbuds — Sage Grey",
      price: "14,900", // Example price
      discount: "6%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/j9n10Cs8/Beats-Fit-Pro-True-Wireless-Earbuds-Sage-Grey.jpg", // Placeholder link
      features: "True wireless design, Sage Grey finish, Active noise cancellation, Comfortable fit",
    },
    {
      name: "EarPods (Lightning Connector)",
      price: "2,900", // Example price
      discount: "2%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/qLNcj5qF/Ear-Pods-Lightning-Connector.jpg", // Placeholder link
      features: "Lightning connector, High-quality sound, Built-in microphone, Comfortable and durable design",
    },
    {
      name: "EarPods (3.5mm Headphone Plug)",
      price: "2,200", // Example price
      discount: "3%", // Include if applicable
      rating: "★★★★☆", // Adjust as needed
      image: "https://i.ibb.co/whsZzP8K/Ear-Pods-3-5mm-Headphone-Plug.jpg", // Placeholder link
      features: "Standard 3.5mm headphone plug, High-quality audio, Built-in microphone, Comfortable ergonomic design",
    },
    {
      name: "EarPods (USB-C)",
      price: "2,500", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★☆", // Adjust as needed
      image: "https://i.ibb.co/844FqpkB/Ear-Pods-USB-C.jpg", // Placeholder link
      features: "USB-C connector, High-fidelity sound, Built-in remote and mic, Durable and lightweight",
    },
    {
      name: "AirPods 4",
      price: "19,900", // Example price
      discount: "6%", // Include if applicable
      rating: "★★★★★",
      image: "https://i.ibb.co/39g3zhFq/Air-Pods-4.jpg", // Placeholder link
      features: "True wireless earbuds, Active noise cancellation, Spatial audio, Long battery life, MagSafe charging case",
    },
    
  ],
  iAccessories: [
    {
      name: "Apple Magic Mouse",
      price: "9,900",
      discount: "10%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/gLRWw7bJ/Apple-Magic-Mouse.jpg",
      features: "Wireless, Multi-touch surface",
    },
    {
      name: "Apple Magic Keyboard",
      price: "12,900",
      discount: "8%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/4gmpQFTQ/Apple-Magic-Key-Board.jpg",
      features: "Wireless, Compact design, Rechargeable battery",
    },
    {
      name: "Apple MagSafe Charger",
      price: "4,500",
      discount: "15%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/B5GHtN3z/Apple-Mag-Safe-Charger.jpg",
      features: "Wireless charging, Magnetic alignment",
    },
    {
      name: "Apple AirTag (4 Pack)",
      price: "11,900",
      discount: "10%",
      rating: "★★★★★",
      image: "https://i.ibb.co/TqJdHn2B/Apple-Air-Tag-4-Pack.jpg",
      features: "Track items, Precision finding, Water-resistant",
    },  
    {
      name: "Apple Silicone Case",
      price: "4,500",
      discount: "10%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/yFDJmQdJ/Apple-Silicone-Case.jpg",
      features: "Soft-touch finish, MagSafe compatible",
    },
    {
      name: "Apple 20W USB-C Power Adapter",
      price: "1,900",
      discount: "5%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/C5C9wKB7/Apple-20-W-USB-C-Power-Adapter.jpg",
      features: "Fast charging, Compact design",
    },
    {
      name: "Apple USB-C to Lightning Cable (1m)",
      price: "1,800",
      discount: "10%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/vCvXJGbm/Apple-USB-C-to-Lightning-Cable-1m.jpg",
      features: "Durable, Fast data transfer",
    },
    {
      name: "Apple MagSafe Duo Charger",
      price: "13,900",
      discount: "8%",
      rating: "★★★★☆",
      image: "https://i.ibb.co/RTjyJYxJ/Apple-Mag-Safe-Duo-Charger.jpg",
      features: "Charges iPhone and Apple Watch simultaneously, Foldable design",
    },
    {
      name: "46mm Gold Milanese Loop - M/L",
      price: "9,500",
      discount: "5%", 
      rating: "★★★★☆", // Adjust as needed
      image: "https://i.ibb.co/Wpnzj3fg/46mm-Gold-Milanese-Loop.jpg", // Placeholder link
      features: "Elegant gold finish, Stainless steel material, Milanese loop design, Compatible with 46mm Apple Watch models",
    },
    {
      name: "46mm Peony Braided Solo Loop - Size 6",
      price: "9,900", // Example price, adjust as needed
      discount: "4%", // Include if applicable
      rating: "★★★★☆", // Adjust based on reviews
      image: "https://i.ibb.co/4ZFVzXsd/46mm-Peony-Braided-Solo-Loop-Size-6.jpg", // Placeholder link
      features: "Soft, stretchable braided design, Peony color, Size 6 fit, Comfortable and durable, Compatible with 46mm Apple Watch models",
    },
    {
      name: "Apple Watch Magnetic Fast Charger to USB-C Cable (1 m)",
      price: "2,900",
      discount: "3%",
      rating: "★★★★☆", 
      image: "https://i.ibb.co/4ZpvwJsN/Apple-Watch-Magnetic-Fast-Charger-to-USB-C-Cable-1-m.jpg", 
      features: "1-meter length, USB-C compatibility, Magnetic fast charging, Durable and lightweight design, Compatible with all Apple Watch models",
    },
    {
      name: "35W Dual USB-C Port Power Adapter",
      price: "5,800", 
      discount: "7%", 
      rating: "★★★★☆", 
      image: "https://i.ibb.co/8DStkBg9/35-W-Dual-USB-C-Port-Power-Adapter.jpg", 
      features: "35W power output, Dual USB-C ports for simultaneous charging, Compact design, Compatible with Apple devices, Supports fast charging",
    },
    {
      name: "Lightning to 3.5mm Headphone Jack Adapter",
      price: "900", // Example price
      discount: "2%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/kV4VQDNy/Lightning-to-3-5mm-Headphone-Jack-Adapter.jpg", // Placeholder link
      features: "Lightning to 3.5mm audio connectivity, Compact and lightweight, High-quality sound transmission, Compatible with all Lightning devices",
    },
    {
      name: "AirPods Pro 2 Ear Tips - 4 pairs",
      price: "1,900", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/9RGGKdN/Air-Pods-Pro-2-Ear-Tips-4-pairs.jpg", // Placeholder link
      features: "4 pairs of ear tips in various sizes, Soft and comfortable silicone material, Designed for AirPods Pro 2, Easy to install and remove",
    },
    {
      name: "AirPods Max Ear Cushions - Midnight",
      price: "7,500", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/LXRFTs3n/Air-Pods-Max-Ear-Cushions-Midnight.jpg", // Placeholder link
      features: "Premium Midnight color, Memory foam for comfort, Durable and easy to attach, Designed for AirPods Max",
    },
    {
      name: "Magic Keyboard with Touch ID and Numeric Keypad - Black Keys",
      price: "19,500", // Example price
      discount: "4%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/fV45nf6M/Magic-Keyboard-with-Touch-ID.jpg", // Placeholder link
      features: "Touch ID support, Numeric keypad, USB-C charging, Sleek black key design, Compatible with Apple silicon Macs",
    },
    {
      name: "Magic Trackpad (USB-C) - Black Multi-Touch Surface",
      price: "14,500", // Example price
      discount: "4%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/RTSbNSLH/Magic-Trackpad-USB-C-Black-Multi-Touch-Surface.jpg", // Placeholder link
      features: "USB-C connectivity, Multi-Touch gestures, Black finish, Compatible with macOS devices",
    },
    {
      name: "Magic Mouse (USB-C) - Black Multi-Touch Surface",
      price: "8,900", // Example price
      discount: "5%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/hJ2Qrjb8/Magic-Mouse-USB-C-Black-Multi-Touch-Surface.jpg", // Placeholder link
      features: "Wireless design, USB-C charging, Black finish, Multi-Touch capabilities, Compatible with macOS",
    },
    {
      name: "USB-C Digital AV Multiport Adapter",
      price: "5,900", // Example price
      discount: "3%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/rKqnNrxC/USB-C-Digital-AV-Multiport-Adapter.jpg", // Placeholder link
      features: "HDMI, USB-C, and USB-A ports, Compact design, Compatible with macOS devices",
    },
    {
      name: "USB-C to MagSafe 3 Cable (2m) - Sky Blue",
      price: "4,500", // Example price
      discount: "2%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/3mQm56PZ/USB-C-to-Mag-Safe-3-Cable-2m-Sky-Blue.jpg", // Placeholder link
      features: "2m length, Sky Blue color, USB-C to MagSafe 3, Fast charging capability, Durable and flexible",
    },
    {
      name: "iPhone FineWoven Wallet with MagSafe – Deep Blue",
      price: "8,900", // Example price
      discount: "7%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/PvcyS7pr/i-Phone-Fine-Woven-Wallet-with-Mag-Safe-Deep-Blue.jpg", // Placeholder link
      features: "Deep Blue FineWoven material, MagSafe compatibility, Holds up to three cards, Eco-friendly design",
    },
    {
      name: "iPhone 16 Pro Max Clear Case with MagSafe",
      price: "6,900", // Example price
      discount: "4%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/mCm7nCzQ/i-Phone-16e-Silicone-Case-Winter-Blue.jpg", // Placeholder link
      features: "Crystal-clear design, MagSafe compatibility, Durable and lightweight, Scratch-resistant coating",
    },
    {
      name: "30W USB-C Power Adapter",
      price: "3,900", // Example price
      discount: "4%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/Y7F36HWZ/30-W-USB-C-Power-Adapter.jpg", // Placeholder link
      features: "30W fast charging, Compact design, USB-C connectivity, Compatible with Apple devices",
    },
    {
      name: "20W USB-C Power Adapter",
      price: "1,900", // Example price
      discount: "2%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/YT78hrB7/20-W-USB-C-Power-Adapter.jpg", // Placeholder link
      features: "20W fast charging, Compact and lightweight, USB-C connectivity, Compatible with iPhone and iPad models",
    },
    {
      name: "AirTag FineWoven Key Ring – Blackberry",
      price: "3,500", // Example price
      discount: "10%", // Include if applicable
      rating: "★★★★☆",
      image: "https://i.ibb.co/6JgWmK6g/Air-Tag-Fine-Woven-Key-Ring-Blackberry.jpg", // Placeholder link
      features: "FineWoven material in Blackberry color, Secure attachment for AirTag, Durable and stylish design, Easy to use",
    },
    
  
  ],
};

export default Products;



















