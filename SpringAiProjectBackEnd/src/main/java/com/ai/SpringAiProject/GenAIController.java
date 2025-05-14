package com.ai.SpringAiProject;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.image.ImageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class GenAIController {
	private final ChatService chatService;
	private final ImageService imageService;
	@Autowired
	public GenAIController(ChatService chatService,ImageService imageService) {
		super();
		this.chatService = chatService;
		this.imageService= imageService;
	}

	@GetMapping("/ask-ai")
	public ChatResponse getResponse(@RequestParam String prompt) {
		return chatService.getResponse(prompt);
		
	}
	
	@GetMapping("/generate-img")
	public ImageResponse getImages(@RequestParam String prompt) {
		return imageService.generateImage(prompt);
	}
}
