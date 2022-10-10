const items = [] 

//macbooks
items.push(macbook1 = new ShoopItems("14‑inch MacBook Pro - Space Gray", "Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine, 16GB unified memory, 512GB SSD storage" , "macbook", 1, 1999, "14‑inch MacBook Pro 16GB 512GB"))
items.push(macbook2 = new ShoopItems("14‑inch MacBook Pro - Space Gray", "Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine 32GB unified memory 1TB SSD storage" , "macbook", 2, 2599, "14‑inch MacBook Pro 32GB 1TB"))
items.push(macbook3 = new ShoopItems("16‑inch MacBook Pro - Space Gray", "Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine, 16GB unified memory, 512GB SSD storage" , "macbook", 3, 2499, "16‑inch MacBook Pro 16GB 512GB"))
items.push(macbook4 = new ShoopItems("16‑inch MacBook Pro - Space Gray", "Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine, 32GB unified memory, 1TB SSD storage" , "macbook", 4, 3099, "16‑inch MacBook Pro 32GB 1TB"))
items.push(macbook5 = new ShoopItems("MacBook Air - Midnight", "Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine, 8GB unified memory, 256GB SSD storage" , "macbook", 5, 1199, "MacBook Air 8GB 256GB"))
items.push(macbook6 = new ShoopItems("MacBook Air - Midnight", "Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine, 16GB unified memory, 512GB SSD storage" , "macbook", 6, 1599, "MacBook Air 16GB 512GB"))

//ipads
items.push(ipad1 = new ShoopItems("iPad Air", "Space Gray, 64GB, Wi-Fi only, USB‑C Charge Cable (1 meter), 20W USB‑C Power Adapter" , "ipad", 1, 599, "iPad Air 64GB Wi-Fi"))
items.push(ipad2 = new ShoopItems("iPad Air", "Space Gray, 256GB, Wi-Fi + Celular, USB‑C Charge Cable (1 meter), 20W USB‑C Power Adapter" , "ipad", 2, 899, "iPad Air 258GB Wi-Fi + Celular"))
items.push(ipad3 = new ShoopItems("iPad Pro", "11-inch iPad Pro, Silver, 128GB, Wi-Fi only, No Engraving, USB-C Charge Cable (1 meter), 20W USB-C Power Adapter" , "ipad", 3, 799, "iPad Pro 11 128GB Wi-Fi"))
items.push(ipad4 = new ShoopItems("iPad Pro", "11-inch iPad Pro, Space Gray, 1TB, Wi-Fi + Celular, No Engraving, USB-C Charge Cable (1 meter), 20W USB-C Power Adapter" , "ipad", 4, 1699, "iPad Pro 11 1TB Wi-Fi + Celular"))
items.push(ipad5 = new ShoopItems("iPad Pro", "12.9-inch iPad Pro, Silver, 128GB, Wi-Fi only, No Engraving, USB-C Charge Cable (1 meter), 20W USB-C Power Adapter" , "ipad", 5, 1099, "iPad Pro 12.9 128GB Wi-Fi"))
items.push(ipad6 = new ShoopItems("iPad Pro", "Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine, 16GB unified memory, 512GB SSD storage" , "ipad", 6, 1999, "iPad Pro 12.9 1TB Wi-Fi + Celular"))

// iphones
items.push(iphone1 = new ShoopItems("iPhone 14 Pro Max", "Silver, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine" , "iphone", 1, 1099, "iPhone 14 Pro Max 128GB"))
items.push(iphone2 = new ShoopItems("iPhone 14 Pro Max", "Space Black, 1TB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine" , "iphone", 2, 1599, "iPhone 14 Pro Max 1TB"))
items.push(iphone3 = new ShoopItems("iPhone 14 Pro", "Silver, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine" , "iphone", 3, 999, "iPhone 14 Pro 128GB"))
items.push(iphone4 = new ShoopItems("iPhone 14 Pro", "Space Black, 1TB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine" , "iphone", 4, 1599, "iPhone 14 Pro 1TB"))
items.push(iphone5 = new ShoopItems("iPhone 14", "(PRODUCT)RED, 512GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine" , "iphone", 5, 1099, "iPhone 14 512GB"))
items.push(iphone6 = new ShoopItems("iPhone 14", "Starlight, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine" , "iphone", 6, 799, "iPhone 14 128GB"))

// airpods
items.push(airpods1 = new ShoopItems("AirPods", "(3rd generation) with MagSafe Charging Case, Dual beamforming microphones, Dual optical sensors, Motion-detecting accelerometer, Up to 5 hours of listening" , "airpods", 1, 179, "AirPods 3rd generation"))
items.push(airpods2 = new ShoopItems("AirPods Pro", "(2nd generation), Dual beamforming microphones, Dual optical sensors, Motion-detecting accelerometer, Up to 5 hours of listening time with a single charge" , "airpods", 2, 249, "AirPods Pro 2nd generation"))
items.push(airpods3 = new ShoopItems("AirPods", "(2nd generation), Dual beamforming microphones, Dual optical sensors, Motion-detecting accelerometer, Up to 5 hours of listening time with a single charge" , "airpods", 3, 129, "AirPods 2nd generation"))

console.log(items)

// itero para crear los productos
for (const ShoopItems of items){
    ShoopItems.createItem()
  }
  