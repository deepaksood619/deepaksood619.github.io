# Tuning

The process of adapting a model to a new domain or set of custom use cases by training the model on new data

## Fine Tuning

Large language model (LLM) fine-tuning is the process of taking pre-trained models and further training them on smaller, specific datasets to refine their capabilities and improve performance in a particular task or domain. Fine-tuning is about turning general-purpose models and turning them into specialized models. It bridges the gap between generic pre-trained models and the unique requirements of specific applications, ensuring that the language model aligns closely with human expectations.

### LoRA

- Introduce two low-rank matrices, A and B, to work alongside the weight matrix W.
- Adjust these matrices instead of the behemoth W, making updates manageable.

### LoRA-FA (Frozen-A)

- Takes LoRA a step further by freezing matrix A.
- Only matrix B is tweaked, reducing the activation memory needed.

### VeRA

- All about efficiency: matrices A and B are fixed and shared across all layers.
- Focuses on tiny, trainable scaling vectors in each layer, making it super memory-friendly.

### Delta-LoRA

- A twist on LoRA: adds the difference (delta) between products of matrices A and B across training steps to the main weight matrix W.
- Offers a dynamic yet controlled approach to parameter updates.

### LoRA+

- An optimized variant of LoRA where matrix B gets a higher learning rate. This tweak leads to faster and more effective learning.

![5 Techniques to fine-tune LLMs](../../media/Screenshot%202025-03-10%20at%2012.37.42%20PM.jpg)

[Top 4 LLM Fine-tuning Frameworks! - by Avi Chawla](https://blog.dailydoseofds.com/p/top-4-llm-fine-tuning-frameworks)

[Understanding LoRA-derived Techniques for Optimal LLM Fine-tuning](https://www.dailydoseofds.com/understanding-lora-derived-techniques-for-optimal-llm-fine-tuning/)

## Supervised fine-tuning (SFT)

Supervised fine-tuning means updating a pre-trained language model using labeled data to do a specific task. The data used has been checked earlier. This is different from unsupervised methods, where data isn't checked. Usually, the initial training of the language model is unsupervised, but fine-tuning is supervised.

## Methods for fine-tuning LLMs

- Instruction fine-tuning
- Full fine-tuning
- Parameter-efficient fine-tuning (PEFT)
	- [LLM (Parameter Efficient) Fine Tuning - Explained! - YouTube](https://www.youtube.com/watch?v=HcVtpLAGMXo)

## Performance Optimization

### [GitHub - microsoft/BitNet: Official inference framework for 1-bit LLMs](https://github.com/microsoft/BitNet)

bitnet.cpp is the official inference framework for 1-bit LLMs (e.g., BitNet b1.58). It offers a suite of optimized kernels, that support **fast** and **lossless** inference of 1.58-bit models on CPU (with NPU and GPU support coming next).

The first release of bitnet.cpp is to support inference on CPUs. bitnet.cpp achieves speedups of **1.37x** to **5.07x** on ARM CPUs, with larger models experiencing greater performance gains. Additionally, it reduces energy consumption by **55.4%** to **70.0%**, further boosting overall efficiency. On x86 CPUs, speedups range from **2.37x** to **6.17x** with energy reductions between **71.9%** to **82.2%**. Furthermore, bitnet.cpp can run a 100B BitNet b1.58 model on a single CPU, achieving speeds comparable to human reading (5-7 tokens per second), significantly enhancing the potential for running LLMs on local devices.

- [BitNet - Inference framework for 1-bit LLMs : r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1g6jmwl/bitnet_inference_framework_for_1bit_llms/)
- [Bitnet.cpp an opensource LLM platform by Microsoft \| by Kldurga \| Medium](https://medium.com/@kldurga999/bitnet-cpp-an-opensource-llm-platform-by-microsoft-8cdeccf272c2)
- [bitnet.cpp from Microsoft: Run LLMs locally on CPU! (hands-on) - YouTube](https://www.youtube.com/watch?v=C4OYJAs4O60)
- [\[2504.12285\] BitNet b1.58 2B4T Technical Report](https://arxiv.org/abs/2504.12285)

## Others

- Instruct tuning / Instruction Tuning
- [GitHub - ggml-org/ggml: Tensor library for machine learning](https://github.com/ggml-org/ggml)
	- [ggml/docs/gguf.md at master · ggml-org/ggml · GitHub](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md)
	- GGUF - A binary format that is optimized for quick loading and saving of models, making it highly efficient for inference purposes.

## Links

- [Fine-tuning large language models (LLMs) in 2024 | SuperAnnotate](https://www.superannotate.com/blog/llm-fine-tuning)
- [Pruning Aware Training(PAT) in LLMs - by Bugra Akyildiz](https://mlops.substack.com/p/pruning-aware-trainingpat-in-llms)
- [Generative AI Fine Tuning LLM Models Crash Course - YouTube](https://www.youtube.com/watch?v=t-0s_2uZZU0)
- [KV Caching in LLMs, explained visually](https://www.dailydoseofds.com/p/kv-caching-in-llms-explained-visually/)
- [Inside CALM: Google DeepMind’s Unique Method to Augment LLMs with Other LLMs \| by Jesus Rodriguez \| Medium](https://jrodthoughts.medium.com/inside-calm-google-deepminds-unique-method-to-augment-llms-with-other-llms-92cb9526e66c)
	- [GitHub - google-deepmind/calm](https://github.com/google-deepmind/calm)
	- [Accelerating text generation with Confident Adaptive Language Modeling (CALM)](https://research.google/blog/accelerating-text-generation-with-confident-adaptive-language-modeling-calm/)
- [\[2408.13296v1\] The Ultimate Guide to Fine-Tuning LLMs from Basics to Breakthroughs: An Exhaustive Review of Technologies, Research, Best Practices, Applied Research Challenges and Opportunities](https://arxiv.org/abs/2408.13296v1)
