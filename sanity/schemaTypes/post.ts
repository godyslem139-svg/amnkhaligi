import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "المقالات والمدونة",
  type: "document",
  groups: [
    { name: "content", title: "1. المحتوى والوسائط", default: true },
    { name: "seo", title: "2. إعدادات السيو والكلمات المفتاحية" },
    { name: "meta", title: "3. التصنيف والخدمة المرتبطة" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "عنوان المقال الرئيسي (H1)",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().min(10).error("يرجى كتابة عنوان واضح للمقال"),
    }),
    defineField({
      name: "slug",
      title: "رابط المقال (Slug)",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("رابط المقال إجباري"),
    }),
    defineField({
      name: "excerpt",
      title: "ملخص قصير للمقال",
      type: "text",
      rows: 3,
      group: "content",
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: "mainImage",
      title: "الصورة البارزة للمقال (Cover Image)",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "النص البديل للصورة (Alt Text)",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "title",
          type: "string",
          title: "عنوان الصورة عند التمرير",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "قسم المقال",
      type: "string",
      group: "meta",
      options: {
        list: [
          { title: "كشف تسربات المياه", value: "كشف تسربات المياه" },
          { title: "عزل الأسطح والخزانات", value: "عزل الأسطح والخزانات" },
          { title: "ترميم وبناء المباني", value: "ترميم وبناء المباني" },
          { title: "تسليك المجاري والصرف", value: "تسليك المجاري والصرف" },
          { title: "مكافحة الحشرات ورش المبيدات", value: "مكافحة الحشرات ورش المبيدات" },
          { title: "غسيل وصيانة المكيفات", value: "غسيل وصيانة المكيفات" },
          { title: "نصائح هندسية عامة", value: "نصائح هندسية عامة" },
        ],
      },
      initialValue: "كشف تسربات المياه",
    }),
    defineField({
      name: "relatedServiceUrl",
      title: "رابط الخدمة المرتبطة بالمقال",
      type: "string",
      group: "meta",
      options: {
        list: [
          { title: "خدمة كشف تسربات المياه", value: "/services/water-leak-detection" },
          { title: "خدمة عزل الأسطح", value: "/services/roof-insulation" },
          { title: "خدمة تنظيف وعزل الخزانات", value: "/services/tank-cleaning" },
          { title: "خدمة ترميم وبناء", value: "/services/restoration-and-construction" },
          { title: "خدمة تسليك المجاري", value: "/services/sewage-clearing" },
          { title: "خدمة رش المبيدات", value: "/services/pest-control" },
          { title: "خدمة غسيل المكيفات", value: "/services/ac-washing" },
        ],
      },
      initialValue: "/services/water-leak-detection",
    }),
    defineField({
      name: "readingTime",
      title: "وقت القراءة المقدر (بالدقائق)",
      type: "number",
      group: "meta",
      initialValue: 5,
    }),
    defineField({
      name: "publishedAt",
      title: "تاريخ النشر",
      type: "datetime",
      group: "meta",
      initialValue: () => new Date().toISOString(),
    }),

    // محتوى HTML مباشر (اختياري)
    defineField({
      name: "htmlContent",
      title: "محتوى HTML مباشر (اختياري بدلاً من المحرر العادي)",
      type: "text",
      rows: 15,
      group: "content",
      description: "إذا كنت تريد كتابة المقال بلغة HTML مباشرة، اكتب الكود هنا.",
    }),

    // محرر المقال الغني التقليدي
    defineField({
      name: "body",
      title: "محتوى المقال التفصيلي (المحرر الغني)",
      group: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "فقرة عادية", value: "normal" },
            { title: "عنوان رئيسي (H2)", value: "h2" },
            { title: "عنوان فرعي (H3)", value: "h3" },
            { title: "اقتباس", value: "blockquote" },
          ],
          lists: [
            { title: "قائمة نقطية", value: "bullet" },
            { title: "قائمة مرقمة", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "خط عريض", value: "strong" },
              { title: "خط مائل", value: "em" },
              { title: "تمييز ذهبي", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "رابط (Link)",
                fields: [
                  { name: "href", type: "url", title: "الرابط (URL)" },
                  { name: "title", type: "string", title: "عنوان الرابط (Title)" },
                  { name: "blank", type: "boolean", title: "فتح في نافذة جديدة؟" },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          title: "صورة داخل المقال",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "النص البديل (Alt)", validation: (Rule) => Rule.required() },
            { name: "caption", type: "string", title: "تعليق تحت الصورة" },
          ],
        },
        {
          type: "object",
          name: "videoEmbed",
          title: "إدراج فيديو",
          fields: [
            { name: "videoTitle", type: "string", title: "عنوان الفيديو" },
            { name: "videoFile", type: "file", title: "ملف فيديو MP4" },
            { name: "externalVideoUrl", type: "url", title: "أو رابط خارجي" },
          ],
        },
        {
          type: "object",
          name: "ctaBlock",
          title: "صندوق دعوة للتواصل (CTA)",
          fields: [
            { name: "heading", type: "string", title: "العنوان", initialValue: "هل تعاني من هذه المشكلة في عقارك بالخرج؟" },
            { name: "subtext", type: "text", rows: 2, title: "النص التشجيعي" },
            { name: "buttonText", type: "string", title: "نص الزر", initialValue: "اطلب المعاينة الفورية عبر واتساب" },
            { name: "customLink", type: "string", title: "رابط مخصص", initialValue: "https://wa.me/966501206816" },
          ],
        },
        {
          type: "object",
          name: "calloutBox",
          title: "صندوق نصيحة / تحذير",
          fields: [
            { name: "boxType", type: "string", title: "النوع", options: { list: ["tip", "warning"] }, initialValue: "tip" },
            { name: "title", type: "string", title: "العنوان", initialValue: "نصيحة مهندس أساس الأمن الخليجي:" },
            { name: "content", type: "text", rows: 3, title: "المحتوى" },
          ],
        },
      ],
    }),

    // حقول السيو مع التحقق التلقائي
    defineField({
      name: "seoTitle",
      title: "عنوان السيو (Meta Title)",
      type: "string",
      group: "seo",
      description: "عنوان ظهور المقال في محركات البحث (المثالي بين 50 إلى 60 حرفاً)",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true;
          const length = value.length;
          if (length > 60) return `⚠️ العنوان طويل (${length} حرف). يفضل ألا يتجاوز 60 حرفاً.`;
          if (length < 40) return `ℹ️ العنوان قصير نسبياً (${length} حرف). يفضل جعله بين 50 و 60 حرفاً.`;
          return true;
        }),
    }),
    defineField({
      name: "seoDescription",
      title: "وصف السيو (Meta Description)",
      type: "text",
      rows: 3,
      group: "seo",
      description: "وصف ظهور المقال تحت الرابط في جوجل (المثالي بين 120 إلى 160 حرفاً)",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true;
          const length = value.length;
          if (length < 120) return `⚠️ الوصف قصير جداً (${length} حرف). يفضل أن يكون بين 120 و 160 حرفاً.`;
          if (length > 160) return `⚠️ الوصف طويل جداً (${length} حرف). سيتم قصه في نتائج البحث.`;
          return true;
        }),
    }),
  ],
});