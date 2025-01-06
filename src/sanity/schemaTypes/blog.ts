import type { Rule } from 'sanity';

export const blog = {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().min(5).max(100),
      },
      {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {                     //Automatically generates the slug from the title.
              source: 'title',
              maxLength: 96,               //Limits slug length for SEO optimization.
            },
            validation: (Rule: Rule) => Rule.required(),         
          },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: Rule) => Rule.required().min(10),
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: { hotspot: true },
        
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
        validation: (Rule: Rule) => Rule.required(),
      },
    ],
  };
  