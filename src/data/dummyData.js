// Fallback product data for when InsForge is not available
const fallbackProducts = [{
        id: 'm1',
        name: 'Classic Slim Fit Suit',
        category: 'Men',
        subCategory: 'Suits',
        price: 299.00,
        images: [
            'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
        ],
        description: 'Sharp tailored slim fit suit perfect for formal occasions',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm2',
        name: 'Casual Oxford Button Shirt',
        category: 'Men',
        subCategory: 'Shirts',
        price: 65.00,
        images: [
            'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg'
        ],
        description: 'Crisp oxford weave shirt ideal for smart casual dressing',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm3',
        name: 'Slim Fit Chino Pants',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 75.00,
        images: [
            'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg'
        ],
        description: 'Modern slim fit chinos crafted from stretch cotton blend',
        sizes: ['30', '32', '34', '36'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm4',
        name: 'Leather Biker Jacket',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 220.00,
        images: [
            'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg'
        ],
        description: 'Premium genuine leather jacket with edgy biker styling',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm5',
        name: 'Classic White Crew Tee',
        category: 'Men',
        subCategory: 'T-Shirts',
        price: 35.00,
        images: [
            'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg'
        ],
        description: 'Soft combed cotton crew neck tee for everyday casual wear',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm6',
        name: 'Tailored Blazer',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 175.00,
        images: [
            'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg'
        ],
        description: 'Structured single-breasted blazer with modern slim lapels',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'm7',
        name: 'Relaxed Fit Denim Jeans',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 90.00,
        images: [
            'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg'
        ],
        description: 'Classic relaxed fit denim with authentic washed finish',
        sizes: ['30', '32', '34', '36'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm8',
        name: 'Merino Wool Sweater',
        category: 'Men',
        subCategory: 'Sweaters',
        price: 120.00,
        images: [
            'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg'
        ],
        description: 'Lightweight merino wool knit with a refined minimalist look',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'm9',
        name: 'Linen Resort Shirt',
        category: 'Men',
        subCategory: 'Shirts',
        price: 70.00,
        images: [
            'https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg'
        ],
        description: 'Breathable linen fabric perfect for warm weather styling',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm10',
        name: 'Track Jogger Pants',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 60.00,
        images: [
            'https://images.pexels.com/photos/4384679/pexels-photo-4384679.jpeg'
        ],
        description: 'Comfortable tapered joggers with sporty elastic cuff design',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm11',
        name: 'Quilted Puffer Vest',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 95.00,
        images: [
            'https://images.pexels.com/photos/6311641/pexels-photo-6311641.jpeg'
        ],
        description: 'Lightweight quilted vest with insulated fill for layering',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm12',
        name: 'Polo Shirt Pique Cotton',
        category: 'Men',
        subCategory: 'Shirts',
        price: 55.00,
        images: [
            'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg'
        ],
        description: 'Classic pique cotton polo shirt with ribbed collar and cuffs',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm13',
        name: 'Formal Dress Shirt',
        category: 'Men',
        subCategory: 'Shirts',
        price: 80.00,
        images: [
            'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg'
        ],
        description: 'Crisp poplin weave dress shirt with French tuck silhouette',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm14',
        name: 'Cargo Utility Shorts',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 50.00,
        images: [
            'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg'
        ],
        description: 'Durable multi-pocket cargo shorts with relaxed summer fit',
        sizes: ['30', '32', '34', '36'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm15',
        name: 'Hooded Zip-Up Sweatshirt',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 85.00,
        images: [
            'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg'
        ],
        description: 'Cozy fleece zip-up hoodie with kangaroo pocket and drawstring',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'm16',
        name: 'Classic White Oxford Shirt',
        category: 'Men',
        subCategory: 'Shirts',
        price: 55.00,
        images: [
            'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg'
        ],
        description: 'Formal white oxford shirt with slim fit tailoring',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm17',
        name: 'Slim Fit Black Blazer',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 140.00,
        images: [
            'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg'
        ],
        description: 'Modern slim fit black blazer for formal occasions',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm18',
        name: 'Casual Denim Jacket',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 95.00,
        images: [
            'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg'
        ],
        description: 'Classic blue denim jacket for everyday casual wear',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm19',
        name: 'Premium Leather Jacket',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 220.00,
        images: [
            'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg'
        ],
        description: 'Stylish brown leather jacket with biker-inspired design',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm20',
        name: 'Athletic Jogger Pants',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 60.00,
        images: [
            'https://images.pexels.com/photos/4384679/pexels-photo-4384679.jpeg'
        ],
        description: 'Comfortable tapered jogger pants for sporty look',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm21',
        name: 'Cotton Polo T-Shirt',
        category: 'Men',
        subCategory: 'T-Shirts',
        price: 45.00,
        images: [
            'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg'
        ],
        description: 'Breathable cotton polo t-shirt with modern fit',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm22',
        name: 'Relaxed Fit Cargo Pants',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 75.00,
        images: [
            'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg'
        ],
        description: 'Functional cargo pants with multiple utility pockets',
        sizes: ['30', '32', '34', '36'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm23',
        name: 'Formal Navy Suit',
        category: 'Men',
        subCategory: 'Suits',
        price: 280.00,
        images: [
            'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
        ],
        description: 'Elegant navy blue suit perfect for business meetings',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm24',
        name: 'Graphic Streetwear Hoodie',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 80.00,
        images: [
            'https://images.pexels.com/photos/6311388/pexels-photo-6311388.jpeg'
        ],
        description: 'Oversized hoodie with trendy streetwear graphics',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm25',
        name: 'Classic Blue Jeans',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 70.00,
        images: [
            'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg'
        ],
        description: 'Regular fit blue denim jeans with timeless style',
        sizes: ['30', '32', '34', '36'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm26',
        name: 'Linen Summer Shirt',
        category: 'Men',
        subCategory: 'Shirts',
        price: 65.00,
        images: [
            'https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg'
        ],
        description: 'Lightweight linen shirt ideal for warm weather',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm28',
        name: 'Checked Flannel Shirt',
        category: 'Men',
        subCategory: 'Shirts',
        price: 58.00,
        images: [
            'https://images.pexels.com/photos/3763817/pexels-photo-3763817.jpeg'
        ],
        description: 'Soft checked flannel shirt for casual styling',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm29',
        name: 'Minimalist Crew Neck Sweater',
        category: 'Men',
        subCategory: 'Sweaters',
        price: 72.00,
        images: [
            'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg'
        ],
        description: 'Simple knit crew neck sweater with modern aesthetic',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm30',
        name: 'Tailored Chino Pants',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 68.00,
        images: [
            'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg'
        ],
        description: 'Slim tailored chino pants suitable for smart casual outfits',
        sizes: ['30', '32', '34', '36'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm31',
        name: 'Vintage Varsity Jacket',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 120.00,
        images: [
            'https://images.pexels.com/photos/1124469/pexels-photo-1124469.jpeg'
        ],
        description: 'Retro varsity jacket inspired by college fashion',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm32',
        name: 'Athletic Compression T-Shirt',
        category: 'Men',
        subCategory: 'T-Shirts',
        price: 50.00,
        images: [
            'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg'
        ],
        description: 'Performance compression t-shirt for gym workouts',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm33',
        name: 'Classic Trench Coat',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 210.00,
        images: [
            'https://images.pexels.com/photos/1125611/pexels-photo-1125611.jpeg'
        ],
        description: 'Elegant trench coat with long tailored silhouette',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm34',
        name: 'Knitted Cardigan Sweater',
        category: 'Men',
        subCategory: 'Sweaters',
        price: 88.00,
        images: [
            'https://images.pexels.com/photos/3755707/pexels-photo-3755707.jpeg'
        ],
        description: 'Soft knitted cardigan sweater for layered outfits',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm35',
        name: 'Distressed Skinny Jeans',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 82.00,
        images: [
            'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg'
        ],
        description: 'Fashionable distressed skinny jeans with ripped details',
        sizes: ['30', '32', '34', '36'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm36',
        name: 'Oversized Graphic T-Shirt',
        category: 'Men',
        subCategory: 'T-Shirts',
        price: 42.00,
        images: [
            'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg'
        ],
        description: 'Loose fit graphic tee with contemporary street style',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm37',
        name: 'Formal Waistcoat Vest',
        category: 'Men',
        subCategory: 'Suits',
        price: 90.00,
        images: [
            'https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg'
        ],
        description: 'Sophisticated waistcoat vest for formal styling',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'm38',
        name: 'Sports Track Jacket',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 78.00,
        images: [
            'https://images.pexels.com/photos/4384680/pexels-photo-4384680.jpeg'
        ],
        description: 'Lightweight zip-up sports track jacket',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm39',
        name: 'Double Breasted Suit Jacket',
        category: 'Men',
        subCategory: 'Suits',
        price: 260.00,
        images: [
            'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg'
        ],
        description: 'Luxury double breasted suit jacket with sharp tailoring',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm40',
        name: 'Printed Hawaiian Shirt',
        category: 'Men',
        subCategory: 'Shirts',
        price: 55.00,
        images: [
            'https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg'
        ],
        description: 'Colorful tropical Hawaiian shirt for beach fashion',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm41',
        name: 'Relaxed Fit Sweatpants',
        category: 'Men',
        subCategory: 'Bottoms',
        price: 58.00,
        images: [
            'https://images.pexels.com/photos/4384679/pexels-photo-4384679.jpeg'
        ],
        description: 'Comfortable fleece sweatpants for casual comfort',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'm42',
        name: 'Vintage Denim Shirt',
        category: 'Men',
        subCategory: 'Shirts',
        price: 69.00,
        images: [
            'https://images.pexels.com/photos/3763818/pexels-photo-3763818.jpeg'
        ],
        description: 'Classic vintage denim shirt with rugged appeal',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'm43',
        name: 'Mock Neck Pullover',
        category: 'Men',
        subCategory: 'Sweaters',
        price: 92.00,
        images: [
            'https://images.pexels.com/photos/3755709/pexels-photo-3755709.jpeg'
        ],
        description: 'Modern mock neck pullover for minimalist winter outfits',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'm44',
        name: 'Smart Casual Bomber Jacket',
        category: 'Men',
        subCategory: 'Outerwear',
        price: 130.00,
        images: [
            'https://images.pexels.com/photos/1124470/pexels-photo-1124470.jpeg'
        ],
        description: 'Modern bomber jacket with versatile styling',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'm45',
        name: 'Classic Henley T-Shirt',
        category: 'Men',
        subCategory: 'T-Shirts',
        price: 40.00,
        images: [
            'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg'
        ],
        description: 'Soft cotton henley t-shirt with button neckline',
        sizes: ['S', 'M', 'L', 'XL'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'w1',
        name: 'Elegant Satin Slip Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 120.00,
        images: [
            'https://images.pexels.com/photos/20851443/pexels-photo-20851443.jpeg'
        ],
        description: 'Smooth satin finish with a sleek minimal silhouette',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w2',
        name: 'Floral Summer Maxi Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 95.00,
        images: [
            'https://images.pexels.com/photos/10324427/pexels-photo-10324427.jpeg'
        ],
        description: 'Lightweight fabric with vibrant floral print for summer',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'w3',
        name: 'Classic Bodycon Midi Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 110.00,
        images: [
            'https://images.pexels.com/photos/26425554/pexels-photo-26425554.jpeg'
        ],
        description: 'Fitted design highlighting curves with modern elegant style',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'w4',
        name: 'Chic Off-Shoulder Evening Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 140.00,
        images: [
            'https://images.pexels.com/photos/31556459/pexels-photo-31556459.jpeg'
        ],
        description: 'Stylish off shoulder design perfect for evening occasions',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w5',
        name: 'Minimalist Linen Wrap Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 85.00,
        images: [
            'https://images.pexels.com/photos/31556462/pexels-photo-31556462.jpeg'
        ],
        description: 'Breathable linen fabric with clean wrap style design',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'w6',
        name: 'Silk A-Line Party Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 150.00,
        images: [
            'https://images.pexels.com/photos/11046451/pexels-photo-11046451.jpeg'
        ],
        description: 'Soft silk material with flattering A-line party fit',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w7',
        name: 'Boho Printed Maxi Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 105.00,
        images: [
            'https://images.pexels.com/photos/5690224/pexels-photo-5690224.jpeg'
        ],
        description: 'Relaxed boho style with colorful prints and flowy fit',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'w8',
        name: 'Ribbed Knit Casual Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 75.00,
        images: [
            'https://images.pexels.com/photos/13715555/pexels-photo-13715555.jpeg'
        ],
        description: 'Comfortable ribbed knit fabric ideal for daily wear',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'w9',
        name: 'Pleated Chiffon Midi Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 130.00,
        images: [
            'https://images.pexels.com/photos/9563073/pexels-photo-9563073.jpeg'
        ],
        description: 'Elegant pleated chiffon design with soft flowing texture',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'w10',
        name: 'Tailored Blazer Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 160.00,
        images: [
            'https://images.pexels.com/photos/30985122/pexels-photo-30985122.jpeg'
        ],
        description: 'Structured blazer style dress with sharp modern look',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w11',
        name: 'Vintage Polka Dot Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 90.00,
        images: [
            'https://images.pexels.com/photos/19881409/pexels-photo-19881409.jpeg'
        ],
        description: 'Retro inspired polka dot design with timeless appeal',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'w12',
        name: 'Asymmetric Hem Designer Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 170.00,
        images: [
            'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg'
        ],
        description: 'Unique asymmetric hem with bold contemporary fashion statement',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w13',
        name: 'Ruffle Sleeve Cocktail Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 125.00,
        images: [
            'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg'
        ],
        description: 'Playful ruffle sleeves with a feminine cocktail silhouette',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'w14',
        name: 'Deep V-Neck Velvet Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 145.00,
        images: [
            'https://images.pexels.com/photos/7691168/pexels-photo-7691168.jpeg'
        ],
        description: 'Luxurious velvet fabric with a stunning deep V-neck cut',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'w15',
        name: 'Tie-Dye Sundress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 80.00,
        images: [
            'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg'
        ],
        description: 'Vibrant tie-dye pattern with a breezy casual sundress fit',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'w16',
        name: 'Elegant Satin Slip Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 120.00,
        images: [
            'https://images.pexels.com/photos/20851443/pexels-photo-20851443.jpeg'
        ],
        description: 'Smooth satin finish with a sleek minimal silhouette',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w17',
        name: 'Floral Summer Maxi Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 95.00,
        images: [
            'https://images.pexels.com/photos/10324427/pexels-photo-10324427.jpeg'
        ],
        description: 'Lightweight floral maxi dress perfect for summer',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'w18',
        name: 'Classic Bodycon Midi Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 110.00,
        images: [
            'https://images.pexels.com/photos/26425554/pexels-photo-26425554.jpeg'
        ],
        description: 'Fitted midi dress designed for an elegant evening look',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'w19',
        name: 'Chic Off-Shoulder Evening Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 140.00,
        images: [
            'https://images.pexels.com/photos/31556459/pexels-photo-31556459.jpeg'
        ],
        description: 'Stylish off-shoulder design ideal for parties and events',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w20',
        name: 'Minimalist Linen Wrap Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 85.00,
        images: [
            'https://images.pexels.com/photos/31556462/pexels-photo-31556462.jpeg'
        ],
        description: 'Breathable linen wrap dress with a modern clean design',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'w21',
        name: 'Silk A-Line Party Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 150.00,
        images: [
            'https://images.pexels.com/photos/11046451/pexels-photo-11046451.jpeg'
        ],
        description: 'Soft silk A-line dress with flattering party fit',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w22',
        name: 'Boho Printed Maxi Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 105.00,
        images: [
            'https://images.pexels.com/photos/5690224/pexels-photo-5690224.jpeg'
        ],
        description: 'Relaxed boho-inspired maxi dress with colorful prints',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'w23',
        name: 'Ribbed Knit Casual Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 75.00,
        images: [
            'https://images.pexels.com/photos/13715555/pexels-photo-13715555.jpeg'
        ],
        description: 'Comfortable knit casual dress for everyday wear',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'w24',
        name: 'Pleated Chiffon Midi Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 130.00,
        images: [
            'https://images.pexels.com/photos/9563073/pexels-photo-9563073.jpeg'
        ],
        description: 'Elegant pleated chiffon dress with flowing texture',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'w25',
        name: 'Tailored Blazer Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 160.00,
        images: [
            'https://images.pexels.com/photos/30985122/pexels-photo-30985122.jpeg'
        ],
        description: 'Structured blazer-style dress with premium tailoring',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w26',
        name: 'Vintage Polka Dot Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 90.00,
        images: [
            'https://images.pexels.com/photos/19881409/pexels-photo-19881409.jpeg'
        ],
        description: 'Retro-inspired polka dot dress with timeless appeal',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: false,
    },
    {
        id: 'w27',
        name: 'Asymmetric Hem Designer Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 170.00,
        images: [
            'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg'
        ],
        description: 'Contemporary asymmetric hem dress with unique style',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: true,
    },
    {
        id: 'w28',
        name: 'Velvet Cocktail Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 145.00,
        images: [
            'https://images.pexels.com/photos/7691168/pexels-photo-7691168.jpeg'
        ],
        description: 'Luxury velvet cocktail dress for evening occasions',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: true,
        isTrending: false,
    },
    {
        id: 'w29',
        name: 'Ruffled Tiered Maxi Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 125.00,
        images: [
            'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg'
        ],
        description: 'Layered tiered maxi dress with elegant ruffle details',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: true,
    },
    {
        id: 'w30',
        name: 'Square Neck Mini Dress',
        category: 'Women',
        subCategory: 'Dresses',
        price: 88.00,
        images: [
            'https://images.pexels.com/photos/3621117/pexels-photo-3621117.jpeg'
        ],
        description: 'Modern square neck mini dress with stylish fit',
        sizes: ['XS', 'S', 'M', 'L'],
        isNew: false,
        isTrending: false,
    },
];

// Fetch products from localStorage fallback
export const fetchProducts = async() => {
    return fallbackProducts;
};

// Fetch new products from localStorage fallback
export const fetchNewProducts = async() => {
    return fallbackProducts.filter(p => p.isNew);
};

// Fetch trending products from localStorage fallback
export const fetchTrendingProducts = async() => {
    return fallbackProducts.filter(p => p.isTrending);
};

// Legacy export for backward compatibility
export const products = fallbackProducts;