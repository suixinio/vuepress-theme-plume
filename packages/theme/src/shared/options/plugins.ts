import type { DocsearchOptions } from '@vuepress/plugin-docsearch'
import type { SearchPluginOptions } from '@vuepress/plugin-search'
import type { ShikiPluginOptions } from '@vuepress/plugin-shiki'
import type { BaiduTongjiOptions } from '@vuepress-plume/vuepress-plugin-baidu-tongji'
import type { CanIUsePluginOptions } from '@vuepress-plume/vuepress-plugin-caniuse'
import type { CopyCodeOptions } from '@vuepress-plume/vuepress-plugin-copy-code'
import type { CommentPluginOptions } from 'vuepress-plugin-comment2'
import type { MarkdownEnhanceOptions } from 'vuepress-plugin-md-enhance'
import type { AutoFrontmatterOptions } from '@vuepress-plume/vuepress-plugin-auto-frontmatter'

export interface PlumeThemePluginOptions {
  /**
   * 是否启用 can-i-use 插件
   */
  caniuse?: false | CanIUsePluginOptions

  /**
   * 是否启用 external-link-icon 插件
   */
  externalLinkIcon?: false

  /**
   * plugin-search 配置
   */
  search?: false | Partial<SearchPluginOptions>

  /**
   * plugin-docsearch 配置
   */
  docsearch?: false | DocsearchOptions

  prismjs?: false

  shiki?: false | ShikiPluginOptions

  git?: false

  nprogress?: false

  mediumZoom?: false

  copyCode?: false | CopyCodeOptions

  markdownEnhance?: false | MarkdownEnhanceOptions

  comment?: false | CommentPluginOptions

  sitemap?: false

  seo?: false

  baiduTongji?: false | BaiduTongjiOptions

  frontmatter?: AutoFrontmatterOptions
}
