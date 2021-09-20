package com.pz;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.handler.AbstractDetectingUrlHandlerMapping;

import lombok.extern.log4j.Log4j2;

@Controller
@Log4j2
public class NJSController {

	@RequestMapping("/")
	public String index() {
		log.info("index");
		return "index";
	}

	final String basePaths = "posts/{title}";

	@RequestMapping({ basePaths })
	public String tools(@PathVariable(name = "title") String title) {
		log.info("tools path " + title);
		AbstractDetectingUrlHandlerMapping d;
		return "posts/[post]";
	}

	@RequestMapping("{path}")
	public String path(@PathVariable(value = "path") String path) {
		log.info("path " + path);
		return path;
	}

	@RequestMapping({ "user/**", "admin/**" })
	public String userPath(HttpServletRequest request) {
		String path = request.getRequestURI();
		log.info("path " + path);
		path = path.replace("/PZ", "");
		return path;
	}

//	@RequestMapping(value = { "**" }, method = { RequestMethod.GET, RequestMethod.POST })
//	public String allRequests(HttpServletRequest request) {
//		String r = request.getRequestURI();
//		log.info("all req " + r);
//		r = r.substring(1);
//		return r;
//	}


	public String getFullURL(HttpServletRequest request) {
		StringBuilder requestURL = new StringBuilder(request.getRequestURL().toString());
		String queryString = request.getQueryString();

		if (queryString == null) {
			return requestURL.toString();
		} else {
			return requestURL.append('?').append(queryString).toString();
		}
	}
}
