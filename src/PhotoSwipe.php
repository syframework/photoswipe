<?php
namespace Sy\Component\Web;

class PhotoSwipe extends \Sy\Component\WebComponent {

	public function __toString() {
		$this->init();
		return parent::__toString();
	}

	private function init() {
		$this->addTranslator(__DIR__ . '/../lang');
		$this->setTemplateFile(__DIR__ . '/PhotoSwipe.html');

		$cdn = 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3';

		$this->addJsLink(['url' => $cdn . '/photoswipe.min.js', 'integrity' => 'sha512-2R4VJGamBudpzC1NTaSkusXP7QkiUYvEKhpJAxeVCqLDsgW4OqtzorZGpulE3eEA7p++U0ZYmqBwO3m+R2hRjA==']);
		$this->addJsLink(['url' => $cdn . '/photoswipe-ui-default.min.js', 'integrity' => 'sha512-SxO0cwfxj/QhgX1SgpmUr0U2l5304ezGVhc0AO2YwOQ/C8O67ynyTorMKGjVv1fJnPQgjdxRz6x70MY9r0sKtQ==']);
		$this->addCssLink(['url' => $cdn . '/photoswipe.min.css', 'integrity' => 'sha512-yxWNfGm+7EK+hqP2CMJ13hsUNCQfHmOuCuLmOq2+uv/AVQtFAjlAJO8bHzpYGQnBghULqnPuY8NEr7f5exR3Qw==']);
		$this->addCssLink(['url' => $cdn . '/default-skin/default-skin.min.css', 'integrity' => 'sha512-Rck8F2HFBjAQpszOB9Qy+NVLeIy4vUOMB7xrp46edxB3KXs2RxXRguHfrJqNK+vJ+CkfvcGqAKMJTyWYBiBsGA==']);
		$this->addJsCode(file_get_contents(__DIR__ . '/PhotoSwipe.js'));
	}

}