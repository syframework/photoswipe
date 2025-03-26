<?php
namespace Sy\Component\Web;

class PhotoSwipe extends \Sy\Component\WebComponent {

	public function __construct() {
		parent::__construct();
		$this->mount(function () {
			$this->init();
		});
	}

	private function init() {
		$this->addTranslator(__DIR__ . '/../lang');
		$this->setTemplateFile(__DIR__ . '/PhotoSwipe.html');
		$this->addJsLink('https://cdn.jsdelivr.net/combine/npm/photoswipe@4/dist/photoswipe-ui-default.min.js,npm/photoswipe@4');
		$this->addCssLink('https://cdn.jsdelivr.net/combine/npm/photoswipe@4/dist/photoswipe.min.css,npm/photoswipe@4/dist/default-skin/default-skin.min.css');
		$this->addJsCode(__DIR__ . '/PhotoSwipe.js');
	}

}