import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/sanity/lib/client";
import {
  Calendar,
  Clock,
  Phone,
  MessageSquare,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

async function getPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    category,
    relatedServiceUrl,
    readingTime,
    publishedAt,
    seoTitle,
    seoDescription,
    htmlContent,
    body[]{
      ...,
      _type == "videoEmbed" => {
        ...,
        "videoFileUrl": videoFile.asset->url
      }
    }
  }`;
  return await client.fetch(query, { slug });
}

// مكونات تنسيق المحتوى الغني
const portableTextComponents: any = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mt-10 mb-4 pb-2 border-b border-[#00BFFF]/30">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-extrabold text-[#00BFFF] mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg sm:text-xl font-bold text-white mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 bg-[#030b1c] border-r-4 border-[#D4AF37] p-6 rounded-2xl text-white italic font-semibold text-lg shadow-md">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="space-y-2.5 my-5 mr-5 list-disc text-gray-200 text-base sm:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="space-y-2.5 my-5 mr-5 list-decimal text-gray-200 text-base sm:text-lg">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-extrabold text-white">{children}</strong>,
    code: ({ children }: any) => (
      <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded font-bold">
        {children}
      </span>
    ),
    link: ({ children, value }: any) => (
      <Link
        href={value?.href || "/"}
        title={value?.title || "رابط ذو صلة"}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[#00BFFF] hover:text-[#D4AF37] underline font-bold transition-colors"
      >
        {children}
      </Link>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <figure className="my-8 bg-[#030b1c] p-3 rounded-3xl border-2 border-[#00BFFF]/40 overflow-hidden shadow-xl">
        <div className="relative w-full h-[300px] sm:h-[440px] rounded-2xl overflow-hidden">
          <Image
            src={urlFor(value).width(1000).url()}
            alt={value.alt || "صورة توضيحية"}
            title={value.alt || "صورة المقال"}
            fill
            className="object-cover"
          />
        </div>
        {value.caption && (
          <figcaption className="text-center text-xs sm:text-sm text-[#D4AF37] font-semibold mt-3">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    videoEmbed: ({ value }: any) => (
      <div className="my-8 bg-[#030b1c] p-5 rounded-3xl border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]">
        <h4 className="text-lg font-extrabold text-[#D4AF37] mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#00BFFF]" />
          <span>{value.videoTitle}</span>
        </h4>
        {value.videoFileUrl ? (
          <video
            src={value.videoFileUrl}
            controls
            playsInline
            className="w-full max-h-[480px] rounded-2xl bg-black border border-gray-800"
          />
        ) : value.externalVideoUrl ? (
          <a
            href={value.externalVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={value.videoTitle}
            className="block p-6 rounded-2xl bg-[#061124] border border-[#00BFFF] text-center text-[#00BFFF] hover:text-[#D4AF37] font-bold"
          >
            اضغط هنا لمشاهدة الفيديو: {value.videoTitle}
          </a>
        ) : null}
      </div>
    ),
    ctaBlock: ({ value }: any) => (
      <div className="my-10 bg-gradient-to-r from-[#030b1c] via-[#091b38] to-[#030b1c] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 text-center shadow-[0_0_35px_rgba(212,175,55,0.25)]">
        <span className="inline-flex items-center gap-1.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 px-3.5 py-1 rounded-full text-xs font-extrabold mb-3">
          <ShieldCheck className="w-4 h-4" />
          خدمة معتمدة بالخرج • ضمان رسمي 10 سنوات
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          {value.heading}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
          {value.subtext}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={value.customLink || "https://wa.me/966501206816"}
            target="_blank"
            rel="noopener noreferrer"
            title="تواصل عبر واتساب"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#D4AF37] text-[#030b1c] font-black px-7 py-4 rounded-xl shadow transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{value.buttonText || "تواصل معنا عبر واتساب"}</span>
          </Link>
          <a
            href="tel:+966501206816"
            title="اتصال هاتفي مباشر"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#061124] text-white border-2 border-[#00BFFF] font-extrabold px-7 py-4 rounded-xl transition-all"
          >
            <Phone className="w-5 h-5" />
            <span dir="ltr">+966 50 120 6816</span>
          </a>
        </div>
      </div>
    ),
    calloutBox: ({ value }: any) => (
      <div
        className={`my-6 p-6 rounded-2xl border-2 ${
          value.boxType === "warning"
            ? "bg-red-950/30 border-red-500/50"
            : "bg-[#030b1c] border-[#00BFFF]/50"
        }`}
      >
        <div className="flex items-center gap-2.5 font-extrabold text-lg text-[#D4AF37] mb-2">
          {value.boxType === "warning" ? (
            <AlertTriangle className="w-6 h-6 text-red-400" />
          ) : (
            <CheckCircle2 className="w-6 h-6 text-[#00BFFF]" />
          )}
          <span>{value.title}</span>
        </div>
        <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{value.content}</p>
      </div>
    ),
  },
};

// قراءة الـ params وجلب البيانات يتم بالكامل داخل هذا المكون المغلف بـ Suspense
async function PostContent({ paramsPromise }: { paramsPromise: Promise<{ slug: string }> }) {
  const { slug } = await paramsPromise;
  const decodedSlug = decodeURIComponent(slug);
  const post = await getPostBySlug(decodedSlug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#061124]/95 border-2 border-[#D4AF37]/60 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_45px_rgba(0,0,0,0.6)]">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="bg-[#D4AF37] text-[#030b1c] text-xs font-black px-3.5 py-1 rounded-lg">
          {post.category || "مقال هندسي"}
        </span>
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#00BFFF]" />
          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("ar-SA") : ""}
        </span>
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
          {post.readingTime || 5} دقائق قراءة
        </span>
      </div>

      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
        {post.title}
      </h1>

      {post.mainImage && (
        <div className="relative w-full h-[280px] sm:h-[440px] rounded-2xl overflow-hidden border-2 border-[#00BFFF]/40 mb-10 bg-[#030b1c] flex items-center justify-center p-2">
          <Image
            src={urlFor(post.mainImage).width(1200).height(675).url()}
            alt={post.mainImage.alt || post.title}
            title={post.mainImage.title || post.title}
            fill
            priority
            className="object-contain"
          />
        </div>
      )}

      <div className="prose prose-invert max-w-none">
        {post.htmlContent ? (
          <div
            className="text-gray-200 text-base sm:text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        ) : (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </div>

      {post.relatedServiceUrl && (
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#030b1c] p-6 rounded-2xl border border-[#00BFFF]/30">
          <div>
            <span className="text-xs text-[#D4AF37] font-bold block mb-1">
              هل تبحث عن تفاصيل هذه الخدمة في الخرج؟
            </span>
            <h3 className="text-lg font-extrabold text-white">
              تصفح الصفحة الهندسية الكاملة للخدمة واطلب المعاينة
            </h3>
          </div>
          <Link
            href={post.relatedServiceUrl}
            title="استعراض صفحة الخدمة"
            className="bg-[#00BFFF] hover:bg-[#D4AF37] text-[#030b1c] font-black px-6 py-3.5 rounded-xl text-sm flex-shrink-0 transition-all"
          >
            استعراض صفحة الخدمة ←
          </Link>
        </div>
      )}
    </article>
  );
}

// المكون الأب متزامن ولا يقوم بعمل await params خارج الـ Suspense نهائياً
export default function SingleBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="relative min-h-screen bg-transparent text-white py-12 lg:py-20" dir="rtl">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <div className="mb-8">
          <Link
            href="/blog"
            title="العودة للمدونة"
            className="inline-flex items-center gap-2 text-sm text-[#00BFFF] hover:text-[#D4AF37] bg-[#061124]/90 px-4 py-2 rounded-full border border-[#00BFFF]/30 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى كافة المقالات</span>
          </Link>
        </div>

        <Suspense fallback={<div className="text-center py-20 text-[#D4AF37] font-bold text-xl">جاري تحميل المقال الهندسي...</div>}>
          <PostContent paramsPromise={params} />
        </Suspense>
      </div>
    </div>
  );
}