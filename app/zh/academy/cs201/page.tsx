import { CS201PayButton } from '@/components/stripe-buttons/cs201';

export default function CS201() {
	return (
		<>
			<div className="px-4 mx-auto max-w-[700px]">
				<h3 className="mt-16 text-3xl font-semibold text-left">CS 201: 创业公司全栈项目开发</h3>

				<h3 className="mt-8 text-xl font-semibold">课程安排：</h3>
				<p className="mt-4">我们深知入行软件工程师的困难，网上有大量的免费的或付费的学习资源，以及一万多刀的Bootcamp，然而技术发展日新月异，您可能会遇到这些问题：</p>
				<ul className="mt-4 list-disc pl-8">
					<li>不知道学什么才是公司需要的</li>
					<li>花大量时间学习的技术和文档已经过时了</li>
					<li>遇到问题卡住没人指导，导致效率低下最终放弃</li>
					<li>做的项目有太多人做过，放在简历上没有吸引力</li>
					<li>实习公司没人带，不知道科技公司技术栈的最佳实践</li>
				</ul>
				<p className="mt-4">因此我们设计了这个小班课程，总计12周，每周一到周四，每天上课2小时。课上包括授课和实践指导，带您从零开始写出创业公司真实项目，让您摆脱简历上的玩具项目。</p>
				<p className="mt-4">完成项目的学员可获得推荐信，如有实习机会会被优先考虑和推荐。</p>

				<div className="mt-8 flex flex-wrap items-center gap-6">
					<CS201PayButton />
					<a className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" href="mailto:neio.ca@hotmail.com">微信咨询</a>
				</div>

				<h3 className="mt-8 text-xl font-semibold">课程亮点：</h3>

				<h4 className="mt-8 font-semibold">小班授课</h4>
				<p className="mt-4">我们有意招收不超过10个学员，保证每位学员都能得到讲师的关注和指导。</p>

				<h4 className="mt-8 font-semibold">讲师经验丰富</h4>
				<p className="mt-4">讲师是来自一线互联网公司的高级软件工程师，同时拥有创业公司的经验，对企业要求的技能有深入了解。</p>

				<h4 className="mt-8 font-semibold">讲课和实践相结合</h4>
				<p className="mt-4">课上讲师会先讲知识点，再带领学员一起写代码，实践中遇到问题立马就会得到讲师的帮助。</p>

				<h4 className="mt-8 font-semibold">全栈项目开发</h4>
				<p className="mt-4">我们会一起实现创业公司真实项目，而不是市面上烂大街的玩具项目，您将学会前端开发，后端开发，数据库管理，自动化测试，CI/CD，部署上线，线上环境维护和更新等公司中实际使用的技能。</p>

				<h4 className="mt-8 font-semibold">最流行的技术栈</h4>
				<p className="mt-4">我们分析了大量北美科技公司招聘要求，并在课程中覆盖了 React, Next.js, JavaScript, TypeScript, Java, Spring Boot, PostgreSQL, Vitest, Playwright, Docker, AWS, Kubernetes 等等最流行的技术栈。并且融入了当下火爆的AI大模型技术。</p>

				<h4 className="mt-8 font-semibold">简历优化和模拟面试</h4>
				<p className="mt-4">课程末尾我们会帮助学员优化简历和模拟面试，让您能够把学到的知识在面试中表达出来。</p>

				<h3 className="mt-8 text-xl font-semibold">课程大纲：</h3>
				<h4 className="mt-8 font-semibold">第一周：前端基础</h4>
				<ul className="mt-4 list-disc pl-8">
					{/* Node.js, NPM, NPM Script, Hello World */}
					<li>创建一个企业级Next.js项目</li>
					{/* 基础语法，变量，常量，function，string，number，object，array，数据类型，接口 */}
					<li>HTML/CSS/JavaScript/TypeScript必备基础和最佳实践</li>
					<li>React必备基础和最佳实践</li>
					<li>Vitest/Playwright自动化测试基础和最佳实践</li>
				</ul>
				<h4 className="mt-8 font-semibold">第二周：前端项目基础</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>企业项目中前后端高效率并行开发最佳实践</li>
					<li>Next.js应用渲染后端数据最佳实践</li>
					<li>自动化测试：后端数据Mock最佳实践</li>
					<li>企业项目中自动生成数据请求API最佳实践</li>
				</ul>
				<h4 className="mt-8 font-semibold">第三周：后端基础</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>创建一个企业级Spring Boot项目</li>
					<li>Java必备基础和最佳实践</li>
					<li>PostgreSQL/SQL/必备基础和最佳实践</li>
					<li>REST API设计最佳实践</li>
				</ul>
				<h4 className="mt-8 font-semibold">第四周：后端项目基础</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>使用Spring Data管理数据库</li>
					<li>使用Spring Security控制访问权限</li>
					<li>使用Spring Cloud管理云服务</li>
					<li>后端接口文档管理和自动化测试</li>
				</ul>
				<h4 className="mt-8 font-semibold">第五周：企业项目敏捷开发双周迭代（Agile Sprint） 1</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>Git基础和最佳实践</li>
					<li>Sprint和Backlog规划</li>
					<li>测试用例</li>
					<li>功能开发</li>
				</ul>
				<h4 className="mt-8 font-semibold">第六周：企业项目敏捷开发双周迭代（Agile Sprint） 1</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>功能开发</li>
					<li>测试</li>
					<li>发布上线</li>
				</ul>
				<h4 className="mt-8 font-semibold">第七周：企业项目敏捷开发双周迭代（Agile Sprint） 2</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>Sprint和Backlog规划</li>
					<li>测试用例</li>
					<li>功能开发</li>
				</ul>
				<h4 className="mt-8 font-semibold">第八周：企业项目敏捷开发双周迭代（Agile Sprint） 2</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>功能开发</li>
					<li>测试</li>
					<li>发布上线</li>
				</ul>
				<h4 className="mt-8 font-semibold">第九周：企业项目敏捷开发双周迭代（Agile Sprint） 3</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>Sprint和Backlog规划</li>
					<li>测试用例</li>
					<li>功能开发</li>
				</ul>
				<h4 className="mt-8 font-semibold">第十周：企业项目敏捷开发双周迭代（Agile Sprint） 3</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>功能开发</li>
					<li>测试</li>
					<li>发布上线</li>
				</ul>
				<h4 className="mt-8 font-semibold">第十一周：项目优化和总结</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>压力测试</li>
					<li>前后端性能优化</li>
					<li>项目汇报</li>
				</ul>
				<h4 className="mt-8 font-semibold">第十二周：简历优化和模拟面试</h4>
				<ul className="mt-4 list-disc pl-8">
					<li>ATS简历自动过滤系统在北美的应用和应对方法</li>
					<li>科技公司大厂和小公司常见的面试流程</li>
					<li>一对一简历优化</li>
					<li>一对一模拟面试</li>
				</ul>

				<div className="mt-8 flex flex-wrap items-center gap-6">
					<CS201PayButton />
					<a className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" href="mailto:neio.ca@hotmail.com">微信咨询</a>
				</div>
			</div>
		</>
	)
}