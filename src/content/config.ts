import { defineCollection, z } from 'astro:content';

// 项目数据集合
const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    publishDate: z.string(),
    image: z.string().optional(), // 项目图片
  })
});

// 个人信息数据集合
const personalInfoCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    role: z.string(),
    avatar: z.string(),
    social: z.object({
      github: z.string().optional(),
      twitter: z.string().optional(),
      wechat: z.string().optional(), // WeChat ID
      x: z.string().optional(), // X (Twitter) profile
      email: z.string().email().optional(),
      website: z.string().url().optional()
    }),
    skills: z.array(z.string()),
    donation: z.object({
      wechat: z.string().optional(),
      alipay: z.string().optional(),
      paypal: z.string().optional(),
      description: z.string().optional()
    }).optional()
  })
});

export const collections = {
  projects: projectsCollection,
  personal: personalInfoCollection
};