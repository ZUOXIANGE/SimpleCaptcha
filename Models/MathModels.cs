namespace SimpleCaptcha.Models;

public record MathCaptchaNewResponse(string Id, int ExpiresInSeconds);
public record MathCaptchaVerifyRequest(string Id, int Answer);
public record MathChallenge(string Id, string Expression, int Answer);
public record MathCaptchaNewWithImageResponse(string Id, int ExpiresInSeconds, string ImageDataUrl);