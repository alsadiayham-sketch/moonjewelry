const DEFAULT_PRODUCTS = [
    { id: 1, name: 'ساعة Guess Royale للسيدات', brand: 'Guess', category: 'ساعات', sizes: [{ size: '34', unit: 'mm', price: 420 }, { size: '38', unit: 'mm', price: 460 }], discount: 10, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 2, name: 'ساعة Michael Kors Lexington', brand: 'Michael Kors', category: 'ساعات', sizes: [{ size: '36', unit: 'mm', price: 680 }, { size: '40', unit: 'mm', price: 720 }], discount: 0, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', status: 'special' },
    { id: 3, name: 'ساعة Tommy Hilfiger Urban Mesh', brand: 'Tommy Hilfiger', category: 'ساعات', sizes: [{ size: '40', unit: 'mm', price: 360 }, { size: '44', unit: 'mm', price: 390 }], discount: 0, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop', status: 'normal' },
    { id: 4, name: 'ساعة Calvin Klein Minimal Gold', brand: 'Calvin Klein', category: 'ساعات', sizes: [{ size: '32', unit: 'mm', price: 510 }, { size: '36', unit: 'mm', price: 550 }], discount: 12, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop', status: 'special' },
    { id: 5, name: 'ساعة Coach Signature Leather', brand: 'Coach', category: 'ساعات', sizes: [{ size: '30', unit: 'mm', price: 470 }, { size: '34', unit: 'mm', price: 520 }], discount: 0, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', status: 'normal' },
    { id: 6, name: 'ساعة Kate Spade Moon Dial', brand: 'Kate Spade', category: 'ساعات', sizes: [{ size: '30', unit: 'mm', price: 390 }, { size: '34', unit: 'mm', price: 430 }], discount: 8, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 7, name: 'ساعة Guess Executive للرجال', brand: 'Guess', category: 'ساعات', sizes: [{ size: '42', unit: 'mm', price: 560 }, { size: '46', unit: 'mm', price: 610 }], discount: 5, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop', status: 'normal' },
    { id: 8, name: 'ساعة Michael Kors Runway Rose', brand: 'Michael Kors', category: 'ساعات', sizes: [{ size: '38', unit: 'mm', price: 760 }, { size: '42', unit: 'mm', price: 800 }], discount: 0, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop', status: 'soldout' },
    { id: 9, name: 'حقيبة Coach Tabby كتف', brand: 'Coach', category: 'حقائب', sizes: [{ size: 'S', unit: 'size', price: 430 }, { size: 'M', unit: 'size', price: 470 }], discount: 0, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', status: 'special' },
    { id: 10, name: 'حقيبة Kate Spade Crossbody Moon', brand: 'Kate Spade', category: 'حقائب', sizes: [{ size: 'S', unit: 'size', price: 280 }, { size: 'M', unit: 'size', price: 320 }], discount: 10, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 11, name: 'حقيبة Guess Luxe Tote', brand: 'Guess', category: 'حقائب', sizes: [{ size: 'M', unit: 'size', price: 360 }, { size: 'L', unit: 'size', price: 410 }], discount: 0, image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=400&h=400&fit=crop', status: 'normal' },
    { id: 12, name: 'حقيبة Michael Kors Jet Set', brand: 'Michael Kors', category: 'حقائب', sizes: [{ size: 'M', unit: 'size', price: 480 }, { size: 'L', unit: 'size', price: 500 }], discount: 7, image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=400&h=400&fit=crop', status: 'special' },
    { id: 13, name: 'حقيبة Calvin Klein Structured', brand: 'Calvin Klein', category: 'حقائب', sizes: [{ size: 'S', unit: 'size', price: 250 }, { size: 'M', unit: 'size', price: 295 }], discount: 0, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', status: 'normal' },
    { id: 14, name: 'حقيبة Tommy Hilfiger Clutch', brand: 'Tommy Hilfiger', category: 'حقائب', sizes: [{ size: 'One Size', unit: 'size', price: 190 }], discount: 15, image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=400&h=400&fit=crop', status: 'normal' },
    { id: 15, name: 'حقيبة Coach Mini Camera', brand: 'Coach', category: 'حقائب', sizes: [{ size: 'S', unit: 'size', price: 310 }, { size: 'M', unit: 'size', price: 350 }], discount: 0, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 16, name: 'حقيبة Kate Spade Evening Clutch', brand: 'Kate Spade', category: 'حقائب', sizes: [{ size: 'One Size', unit: 'size', price: 220 }], discount: 0, image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=400&h=400&fit=crop', status: 'normal' },
    { id: 17, name: 'سوار Guess Crystal Moon', brand: 'Guess', category: 'اكسسوارات', sizes: [{ size: '17', unit: 'cm', price: 120 }, { size: '19', unit: 'cm', price: 135 }], discount: 0, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop', status: 'special' },
    { id: 18, name: 'عقد Michael Kors Spark', brand: 'Michael Kors', category: 'اكسسوارات', sizes: [{ size: '45', unit: 'cm', price: 180 }], discount: 10, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 19, name: 'خاتم Calvin Klein Slim', brand: 'Calvin Klein', category: 'اكسسوارات', sizes: [{ size: '6', unit: 'ring', price: 95 }, { size: '7', unit: 'ring', price: 95 }, { size: '8', unit: 'ring', price: 95 }], discount: 0, image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&h=400&fit=crop', status: 'normal' },
    { id: 20, name: 'سوار Tommy Hilfiger Gold Chain', brand: 'Tommy Hilfiger', category: 'اكسسوارات', sizes: [{ size: '18', unit: 'cm', price: 110 }, { size: '20', unit: 'cm', price: 125 }], discount: 5, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop', status: 'normal' },
    { id: 21, name: 'عقد Coach Charm Layered', brand: 'Coach', category: 'اكسسوارات', sizes: [{ size: '42', unit: 'cm', price: 165 }, { size: '48', unit: 'cm', price: 185 }], discount: 0, image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=400&fit=crop', status: 'special' },
    { id: 22, name: 'خاتم Kate Spade Star Glow', brand: 'Kate Spade', category: 'اكسسوارات', sizes: [{ size: '5', unit: 'ring', price: 80 }, { size: '6', unit: 'ring', price: 80 }, { size: '7', unit: 'ring', price: 80 }], discount: 0, image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&h=400&fit=crop', status: 'normal' },
    { id: 23, name: 'طقم اساور Guess Layered', brand: 'Guess', category: 'اكسسوارات', sizes: [{ size: 'One Size', unit: 'size', price: 145 }], discount: 12, image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=400&h=400&fit=crop', status: 'bestseller' },
    { id: 24, name: 'سلسال Coach Signature Pendant', brand: 'Coach', category: 'اكسسوارات', sizes: [{ size: '50', unit: 'cm', price: 195 }], discount: 0, image: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=400&h=400&fit=crop', status: 'normal' }
];

const DEFAULT_DISCOUNTS = [
    { id: 'launch-accessories', type: 'category', values: ['اكسسوارات'], value: 'اكسسوارات', percentage: 10, description: 'خصم افتتاحي 10% على تشكيلة الاكسسوارات المختارة', expiresAt: '' }
];

const DEFAULT_SITE_SETTINGS = {
    whatsappNumber: '972569236758',
    heroSubtitle: 'ساعات، حقائب، واكسسوارات فاخرة بإطلالة ليلية أنيقة',
    aboutText: 'Moon Jewelry & More وجهتكِ لتنسيق إطلالة راقية تجمع بين الساعات الفاخرة والحقائب الراقية والاكسسوارات اليومية.\n\nننتقي لكِ قطعاً أصلية بتفاصيل ذهبية أنيقة، مع خدمة سريعة واهتمام بكل طلب من أول رسالة حتى التسليم.',
    instagramLink: 'https://www.instagram.com/moon.jewelryandmore'
};

const BRANDS_DATA = [
    { name: 'Guess', logo: '' },
    { name: 'Michael Kors', logo: '' },
    { name: 'Tommy Hilfiger', logo: '' },
    { name: 'Calvin Klein', logo: '' },
    { name: 'Coach', logo: '' },
    { name: 'Kate Spade', logo: '' }
];

function normalizeSizeEntry(entry) {
    if (!entry) return { size: '', unit: 'size', price: 0 };
    return {
        size: String(entry.size || '').trim(),
        unit: String(entry.unit || 'size').trim() || 'size',
        price: Number(entry.price) || 0
    };
}

function normalizeProduct(product) {
    const sizes = Array.isArray(product && product.sizes) && product.sizes.length
        ? product.sizes.map(normalizeSizeEntry)
        : [normalizeSizeEntry({ size: product && product.size, unit: product && product.unit, price: product && product.price })];

    return {
        id: Number(product && product.id) || Date.now(),
        name: (product && product.name) || '',
        brand: (product && product.brand) || '',
        category: (product && product.category) || '',
        sizes: sizes.filter(function (size) { return size.size && size.price >= 0; }),
        discount: Number(product && product.discount) || 0,
        image: (product && product.image) || '',
        status: (product && product.status) || 'normal'
    };
}

function normalizeProducts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeProduct).sort(function (a, b) { return a.id - b.id; });
}

function normalizeDiscount(discount) {
    var values = [];
    if (discount && discount.values && Array.isArray(discount.values)) values = discount.values;
    else if (discount && discount.value) values = String(discount.value).split(',').map(function (v) { return v.trim(); }).filter(Boolean);
    return {
        id: String(discount && discount.id ? discount.id : Date.now()),
        type: ['brand', 'category', 'manual', 'all'].indexOf(discount && discount.type) >= 0 ? discount.type : 'manual',
        value: values.join(', '),
        values: values,
        percentage: Number(discount && discount.percentage) || 0,
        description: String(discount && discount.description ? discount.description : '').trim(),
        expiresAt: discount && discount.expiresAt ? discount.expiresAt : ''
    };
}

function normalizeDiscounts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeDiscount);
}

function extractWhatsappNumber(input) {
    const raw = String(input || '').trim();
    if (!raw) return DEFAULT_SITE_SETTINGS.whatsappNumber;
    const fromLink = raw.indexOf('wa.me/') >= 0 ? raw.split('wa.me/')[1] : raw;
    return fromLink.replace(/[^\d]/g, '');
}

function buildWhatsAppUrl(number, message) {
    const safeNumber = extractWhatsappNumber(number);
    const text = message ? '?text=' + encodeURIComponent(message) : '';
    return 'https://wa.me/' + safeNumber + text;
}

function normalizeSettings(settings) {
    const source = settings || {};
    return {
        whatsappNumber: extractWhatsappNumber(source.whatsappNumber || source.whatsappLink || DEFAULT_SITE_SETTINGS.whatsappNumber),
        heroSubtitle: String(source.heroSubtitle || DEFAULT_SITE_SETTINGS.heroSubtitle),
        aboutText: String(source.aboutText || DEFAULT_SITE_SETTINGS.aboutText),
        instagramLink: String(source.instagramLink || DEFAULT_SITE_SETTINGS.instagramLink)
    };
}

function getSizeData(product, sizeIdx) {
    if (!product || !Array.isArray(product.sizes) || !product.sizes.length) return { size: '', unit: 'size', price: 0 };
    const safeIndex = Math.max(0, Math.min(Number(sizeIdx) || 0, product.sizes.length - 1));
    return product.sizes[safeIndex];
}

function getUnitLabel(unit) {
    return {
        g: 'غرام',
        ml: 'مل',
        mm: 'مم',
        cm: 'سم',
        ring: 'مقاس',
        size: '',
        piece: 'قطعة',
        one: 'قياس موحد'
    }[unit] || unit;
}

function getSizeLabel(sizeData) {
    if (!sizeData) return '';
    if (sizeData.unit === 'size' && String(sizeData.size).toLowerCase() === 'one size') return 'قياس موحد';
    const label = getUnitLabel(sizeData.unit);
    if (!label) return String(sizeData.size || '');
    if (!sizeData.size) return label;
    if (sizeData.unit === 'ring') return label + ' ' + String(sizeData.size);
    return String(sizeData.size) + ' ' + label;
}

function getProductDiscountPercent(product, discounts) {
    let discountPercent = Number(product && product.discount) || 0;
    var now = new Date().toISOString().slice(0, 10);
    normalizeDiscounts(discounts).forEach(function (discount) {
        if (discount.expiresAt && discount.expiresAt < now) return;
        if (discount.type === 'all') discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'brand' && discount.values.indexOf(product.brand) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'category' && discount.values.indexOf(product.category) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
    });
    return discountPercent;
}

function getFinalPrice(product, sizeIdx, discounts) {
    const sizeData = getSizeData(product, sizeIdx);
    const discountPercent = getProductDiscountPercent(product, discounts || []);
    if (discountPercent > 0) {
        return {
            original: Number(sizeData.price) || 0,
            final: Math.round((Number(sizeData.price) || 0) * (1 - discountPercent / 100)),
            hasDiscount: true,
            discountPercent: discountPercent
        };
    }

    return {
        original: Number(sizeData.price) || 0,
        final: Number(sizeData.price) || 0,
        hasDiscount: false,
        discountPercent: 0
    };
}

function normalizeCartItems(cartItems, productsList) {
    const safeProducts = Array.isArray(productsList) ? productsList : normalizeProducts(DEFAULT_PRODUCTS);
    return (Array.isArray(cartItems) ? cartItems : []).map(function (item) {
        const product = safeProducts.find(function (entry) { return entry.id === Number(item.id || item.productId); });
        const maxSizeIndex = product && product.sizes.length ? product.sizes.length - 1 : 0;
        const requestedSize = Number.isInteger(item.sizeIdx) ? item.sizeIdx : parseInt(item.sizeIdx || 0, 10) || 0;
        const sizeIdx = Math.max(0, Math.min(requestedSize, maxSizeIndex));
        return {
            id: Number(item.id || item.productId),
            sizeIdx: sizeIdx,
            qty: Math.max(1, parseInt(item.qty || 1, 10) || 1),
            price: Number(item.price) || (product ? getSizeData(product, sizeIdx).price : 0)
        };
    }).filter(function (item) {
        return item.id;
    });
}

function formatCurrency(value) {
    return '₪' + (Number(value) || 0);
}

function formatDateTime(dateValue) {
    const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleString('ar-PS', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function makeOrderId() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let idx = 0; idx < 5; idx += 1) code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    return 'ORD-' + code;
}
