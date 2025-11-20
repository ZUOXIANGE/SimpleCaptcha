namespace SimpleCaptcha.Models;

public record TextChallenge(string Id, string Text);
public record TextCaptchaNewResponse(string Id, int Width, int Height, int ExpiresInSeconds);
public record TextCaptchaVerifyRequest(string Id, string Text);
public record TextCaptchaNewWithImageResponse(string Id, int Width, int Height, int ExpiresInSeconds, string ImageDataUrl);