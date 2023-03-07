# AWS Rekognition

## Moderating Content / Content Moderation / Community Moderation

You can use Amazon Rekognition to detect content that is inappropriate, unwanted, or offensive. You can use Rekognition moderation APIs in social media, broadcast media, advertising, and e-commerce situations to create a safer user experience, provide brand safety assurances to advertisers, and comply with local and global regulations.

Today, many companies rely entirely on human moderators to review third-party or user-generated content, while others simply react to user complaints to take down offensive or inappropriate images, ads, or videos. However, human moderators alone cannot scale to meet these needs at sufficient quality or speed, which leads to a poor user experience, high costs to achieve scale, or even a loss of brand reputation. By using Rekognition for image and video moderation, human moderators can review a much smaller set of content, typically 1-5% of the total volume, already flagged by machine learning. This enables them to focus on more valuable activities and still achieve comprehensive moderation coverage at a fraction of their existing cost. To set up human workforces and perform human review tasks, you can use Amazon Augmented AI, which is already integrated with Rekognition.

| **Top-Level Category** | **Second-Level Category**    |
|------------------------|------------------------------|
| Explicit Nudity        | Nudity                       |
|                       | Graphic Male Nudity          |
|                       | Graphic Female Nudity        |
|                       | Sexual Activity              |
|                       | Illustrated Explicit Nudity  |
|                       | Adult Toys                   |
| Suggestive             | Female Swimwear Or Underwear |
|                       | Male Swimwear Or Underwear   |
|                       | Partial Nudity               |
|                       | Barechested Male             |
|                       | Revealing Clothes            |
|                       | Sexual Situations            |
| Violence               | Graphic Violence Or Gore     |
|                       | Physical Violence            |
|                       | Weapon Violence              |
|                       | Weapons                      |
|                       | Self Injury                  |
| Visually Disturbing    | Emaciated Bodies             |
|                       | Corpses                      |
|                       | Hanging                      |
|                       | Air Crash                    |
|                       | Explosions And Blasts        |
| Rude Gestures          | Middle Finger                |
| Drugs                  | Drug Products                |
|                       | Drug Use                     |
|                       | Pills                        |
|                       | Drug Paraphernalia           |
| Tobacco                | Tobacco Products             |
|                       | Smoking                      |
| Alcohol                | Drinking                     |
|                       | Alcoholic Beverages          |
| Gambling               | Gambling                     |
| Hate Symbols           | Nazi Party                   |
|                       | White Supremacy              |
|                       | Extremist                    |

Abusive

profane words

## Amazon Transcribe

[Amazon Transcribe](https://aws.amazon.com/transcribe/) is an automatic speech recognition (ASR) service that makes it easy for you to add speech-to-text capabilities to your applications. Starting today, when transcribing audio streams, you can instruct Amazon Transcribe to automatically mask, remove, or tag specific terms in the transcription results based on a vocabulary that you specify. For example, you can use a vocabulary filter to automatically remove profane words from the transcription results for content moderation or generating family-friendly captions. You can create a vocabulary filter once and use it when processing multiple audio streams. You can also create multiple vocabulary filters and choose which one should be used for a particular audio stream. With this launch, vocabulary filtering is now available for both Amazon Transcribe's batch and streaming transcription APIs.

You can use streaming transcription to efficiently and accurately generate transcripts for diverse use cases, such as transcribing calls for contact centers, automatically generating captions for live media broadcasts, and capturing meeting notes for business productivity.

Vocabulary filtering is available for streaming transcription at no additional cost in all the [AWS regions](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) where Amazon Transcribe streaming service is available. To learn more, visit the Amazon Transcribe [documentation page.](https://docs.aws.amazon.com/transcribe/latest/dg/filter-unwanted-words.html)
