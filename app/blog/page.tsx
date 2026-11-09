import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/sanity/lib/client";
import { Calendar, Clock, ArrowLeft, Sparkles, BookOpen } from "lucide-react";

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    category,
    readingTime,
    publishedAt
  }`;
  // استخدام التخزين المؤقت المتوافق مع Next.js الحديث
  return await client.fetch(query, {}, { next: { revalidate: 60 } });
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <div className="relative min-h-screen bg-transparent text-white py-14 lg:py-20" dir="rtl">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* الهيدر التعريفي للمدونة */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>الموسوعة الهندسية والمدونة الرسمية - الخرج</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-5 leading-tight">
            مقالات ونصائح خبراء <span className="text-[#00BFFF]">أساس الأمن</span>{" "}
            <span className="text-[#D4AF37]">الخليجي</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            دليلك الهندسي الشامل لحماية عقارك في الخرج من تسربات المياه، طرق العزل الصحيحة، صيانة المكيفات، ومكافحة الآفات بأحدث التقنيات.
          </p>
        </div>

        {/* شبكة عرض المقالات */}
        {posts.length === 0 ? (
          <div className="bg-[#061124]/90 border-2 border-[#D4AF37]/50 rounded-3xl p-12 text-center max-w-2xl mx-auto">
            <BookOpen className="w-16 h-16 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-white mb-2">
              لوحة التحكم جاهزة لنشر مقالك الأول!
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              توجه إلى لوحة تحكم Sanity عبر الرابط (/studio) وابدأ بإضافة مقالاتك وصورك وفيديوهاتك بسهولة.
            </p>
            <Link
              href="/studio"
              title="الانتقال إلى لوحة تحكم المقالات"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#030b1c] font-black px-6 py-3 rounded-xl"
            >
              <span>فتح لوحة التحكم (/studio)</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <article
                key={post._id}
                className="bg-[#061124]/95 border-2 border-[#00BFFF]/30 hover:border-[#D4AF37] rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_0_25px_rgba(0,191,255,0.1)] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] group"
              >
                <div>
                  {/* صورة المقال */}
                  {post.mainImage && (
                    <Link
                      href={`/blog/${post.slug}`}
                      title={post.title}
                      className="relative h-60 w-full block overflow-hidden bg-[#030b1c] flex items-center justify-center p-2"
                    >
                      <Image
                        src={urlFor(post.mainImage).width(800).height(500).url()}
                        alt={post.mainImage.alt || post.title}
                        title={post.mainImage.title || post.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#030b1c] text-xs font-black px-3 py-1 rounded-lg shadow z-10">
                        {post.category || "نصائح هندسية"}
                      </div>
                    </Link>
                  )}

                  {/* تفاصيل المقال */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#00BFFF]" />
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("ar-SA")
                          : "حديث"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {post.readingTime || 5} دقائق قراءة
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-white group-hover:text-[#D4AF37] transition-colors mb-3 leading-snug">
                      <Link href={`/blog/${post.slug}`} title={post.title}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-gray-800/80">
                  <Link
                    href={`/blog/${post.slug}`}
                    title={`قراءة مقال: ${post.title}`}
                    className="w-full bg-[#030b1c] group-hover:bg-[#D4AF37] text-[#00BFFF] group-hover:text-[#030b1c] border border-[#00BFFF]/40 group-hover:border-[#D4AF37] font-extrabold py-3 px-4 rounded-xl flex items-center justify-between transition-all text-sm"
                  >
                    <span>قراءة المقال كاملاً</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}