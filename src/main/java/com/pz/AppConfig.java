package com.pz;

import javax.servlet.Filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.AutowireCapableBeanFactory;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Component
@Configuration
public class AppConfig implements WebMvcConfigurer {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		System.out.println("addResourceHandlers");
		if (!registry.hasMappingForPattern("/assets/**")) {
			registry.addResourceHandler("/assets/**").addResourceLocations("classpath:/assets/");
		}
		if (!registry.hasMappingForPattern("/resources/**")) {
			registry.addResourceHandler("/resources/**").addResourceLocations("classpath:/resources/");
		}
//		if (!registry.hasMappingForPattern("/_next/**")) {
//			registry.addResourceHandler("/_next/**").addResourceLocations("classpath:/resources/static/_next");
//		}
	}
	// public JavaMailSender getJavaMailSenderImpl() {
	// JavaMailSender mailSender = null;
	// try {
	// // mailSender = new JavaMailSenderImpl();
	// mailSender = new org.springframework.mail.javamail.JavaMailSenderImpl();
	//
	// // mailSender.s
	// // <property name="host" value="mail.programmingzeal.com" />
	// // <property name="port" value="587" />
	// // <property name="javaMailProperties">
	// // <props>
	// // <prop key="mail.smtp.starttls.enable">true</prop>
	// // </props>
	// // </property>
	// // <property name="username"
	// // value="no-reply@programmingzeal.com" />
	// // <property name="password" value="S@ty@m1729" />
	//
	// } catch (Exception e) {
	// // TODO: handle exception
	// }
	// return mailSender;
	// }
	//
	// @Bean
	// public MailProcess getMailProcess() {
	// return new MailProcessImpl();
	// }

	private @Autowired AutowireCapableBeanFactory beanFactory;

	@Bean
	public FilterRegistrationBean registration() {
		Filter filter = new PzCorsFilter();

		FilterRegistrationBean<Filter> registration = new FilterRegistrationBean(filter);
		// registration.setUrlPatterns(Collections.singletonList("/**")); //
		// addUrlPatterns("/**");
		registration.addUrlPatterns("/**");
		// beanFactory.autowireBean(filter);
		registration.setEnabled(true);
		// registration.setFilter(filter);
		return registration;
	}

}
