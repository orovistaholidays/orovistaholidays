import { MetadataRoute } from 'next';
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Package from "@/models/Package";

import { slugify } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await dbConnect();
  
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  const packages = await Package.find({}).sort({ createdAt: -1 });

  const blogUrls = blogs.map((blog) => ({
    url: `https://www.orovistaholidays.com/journal/${blog.slug || slugify(blog.title) || blog._id}`,
    lastModified: blog.updatedAt || blog.createdAt || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const packageUrls = packages.map((pkg) => ({
    url: `https://www.orovistaholidays.com/packages/${pkg.slug || slugify(pkg.title) || pkg._id}`,
    lastModified: pkg.updatedAt || pkg.createdAt || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: 'https://www.orovistaholidays.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.orovistaholidays.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.orovistaholidays.com/journal',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...packageUrls,
    ...blogUrls,
  ];
}
