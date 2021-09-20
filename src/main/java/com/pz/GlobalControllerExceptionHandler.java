package com.pz;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;
import org.thymeleaf.exceptions.TemplateInputException;

@ControllerAdvice
class GlobalControllerExceptionHandler {

	@ExceptionHandler(TemplateInputException.class)
	public ModelAndView handleConflict() {
		ModelAndView v = new ModelAndView("404");

		return v;
	}
}