package com.ai.SpringAiProject;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.stereotype.Service;
@Service
public class ChatService {
	private final ChatModel chatModel;

	public ChatService(ChatModel chatModel) {
		super();
		this.chatModel = chatModel;
	}
	
	public ChatResponse getResponse(String prompt) {
		try {
			return chatModel.call(
				    new Prompt(
				        prompt,
				        OpenAiChatOptions.builder()
				            .model("gpt-4o")
				            .temperature(0.4)
				        .build()
				    ));
        } catch (Exception e) {
             // or a user-friendly message
        }
		return null;
	}
}
