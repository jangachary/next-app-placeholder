package com.pz;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FilenameFilter;
import java.nio.file.Path;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Controller;
import org.springframework.util.ResourceUtils;
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
//		AbstractDetectingUrlHandlerMapping d;
		return "category/[category]";
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
		try {
			File staticDir = ResourceUtils.getFile("classpath:static");
			String _path = path.startsWith("/") ? path.substring(1) : path;
			Path filePath = staticDir.toPath().resolve(_path + ".html");
			File file = filePath.toFile();
			if (!file.exists()) {
				String strFilePath = file.getAbsolutePath();
				strFilePath = FilenameUtils.getBaseName(strFilePath);
				File dir = file.getParentFile();
				File[] files = dir.listFiles(new FilenameFilter() {
					public boolean accept(File dir, String name) {
						return name.contains("[") && name.contains("]");
					}
				});
				if (files.length == 1) {
					File matchedFile = files[0];
					String fileName = FilenameUtils.getBaseName(matchedFile.getAbsolutePath());
					path = path.replace(strFilePath, fileName);

				}
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}

		return path;
	}

//	@RequestMapping(value = { "**" }, method = { RequestMethod.GET, RequestMethod.POST })
//	public String allRequests(HttpServletRequest request) {
//		String r = request.getRequestURI();
//		log.info("all req " + r);
//		r = r.substring(1);
//		return r;
//	}
	public int nthOccurrence(String str1, String str2, int n) {

		String tempStr = str1;
		int tempIndex = -1;
		int finalIndex = 0;
		for (int occurrence = 0; occurrence < n; ++occurrence) {
			tempIndex = tempStr.indexOf(str2);
			if (tempIndex == -1) {
				finalIndex = 0;
				break;
			}
			tempStr = tempStr.substring(++tempIndex);
			finalIndex += tempIndex;
		}
		return --finalIndex;
	}

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
