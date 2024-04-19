'use strict';

var data = {
	photos: {
		america: [
			{
				id: 1,
				name: 'America 1',
				description:
					'America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/1.jpg',
			},
			{
				id: 2,
				name: 'America 2',
				description:
					'America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/2.jpg',
			},
			{
				id: 3,
				name: 'America 3',
				description:
					'America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/3.jpg',
			},
			{
				id: 4,
				name: 'America 4',
				description:
					'America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/4.jpg',
			},
			{
				id: 5,
				name: 'America 5',
				description:
					'America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/5.jpg',
			},
			{
				id: 6,
				name: 'America 6',
				description:
					'America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/6.jpg',
			},
			{
				id: 7,
				name: 'America 7',
				description:
					'America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/7.jpg',
			},
			{
				id: 8,
				name: 'America 8',
				description:
					'America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/8.jpg',
			},
			{
				id: 9,
				name: 'America 9',
				description:
					'America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/9.jpg',
			},
			{
				id: 10,
				name: 'America 10',
				description:
					'America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/america/10.jpg',
			},
		],
		europe: [
			{
				id: 11,
				name: 'Europe 1',
				description:
					'Europe 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/1.jpg',
			},
			{
				id: 12,
				name: 'Europe 2',
				description:
					'Europe 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/2.jpg',
			},
			{
				id: 13,
				name: 'Europe 3',
				description:
					'Europe 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/3.jpg',
			},
			{
				id: 14,
				name: 'Europe 4',
				description:
					'Europe 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/4.jpg',
			},
			{
				id: 15,
				name: 'Europe 5',
				description:
					'Europe 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/5.jpg',
			},
			{
				id: 16,
				name: 'Europe 6',
				description:
					'Europe 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/6.jpg',
			},
			{
				id: 17,
				name: 'Europe 7',
				description:
					'Europe 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/7.jpg',
			},
			{
				id: 18,
				name: 'Europe 8',
				description:
					'Europe 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/8.jpg',
			},
			{
				id: 19,
				name: 'Europe 9',
				description:
					'Europe 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/9.jpg',
			},
			{
				id: 20,
				name: 'Europe 10',
				description:
					'Europe 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/europe/10.jpg',
			},
		],

		africa: [
			{
				id: 21,
				name: 'Africa 1',
				description:
					'Africa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/1.jpg',
			},
			{
				id: 22,
				name: 'Africa 2',
				description:
					'Africa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/2.jpg',
			},
			{
				id: 23,
				name: 'Africa 3',
				description:
					'Africa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/3.jpg',
			},
			{
				id: 24,
				name: 'Africa 4',
				description:
					'Africa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/4.jpg',
			},
			{
				id: 25,
				name: 'Africa 5',
				description:
					'Africa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/5.jpg',
			},
			{
				id: 26,
				name: 'Africa 6',
				description:
					'Africa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/6.jpg',
			},
			{
				id: 27,
				name: 'Africa 7',
				description:
					'Africa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/7.jpg',
			},
			{
				id: 28,
				name: 'Africa 8',
				description:
					'Africa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/8.jpg',
			},
			{
				id: 29,
				name: 'Africa 9',
				description:
					'Africa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/9.jpg',
			},
			{
				id: 30,
				name: 'Africa 10',
				description:
					'Africa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/africa/10.jpg',
			},
		],
		asia: [
			{
				id: 31,
				name: 'Asia 1',
				description:
					'Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/1.jpg',
			},
			{
				id: 32,
				name: 'Asia 2',
				description:
					'Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/2.jpg',
			},
			{
				id: 33,
				name: 'Asia 3',
				description:
					'Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/3.jpg',
			},
			{
				id: 34,
				name: 'Asia 4',
				description:
					'Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/4.jpg',
			},
			{
				id: 35,
				name: 'Asia 5',
				description:
					'Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/5.jpg',
			},
			{
				id: 36,
				name: 'Asia 6',
				description:
					'Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/6.jpg',
			},
			{
				id: 37,
				name: 'Asia 7',
				description:
					'Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/7.jpg',
			},
			{
				id: 38,
				name: 'Asia 8',
				description:
					'Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/8.jpg',
			},
			{
				id: 39,
				name: 'Asia 9',
				description:
					'Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/9.jpg',
			},
			{
				id: 40,
				name: 'Asia 10',
				description:
					'Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/asia/10.jpg',
			},
		],
		oceania: [
			{
				id: 41,
				name: 'Oceania 1',
				description:
					'Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/1.jpg',
			},
			{
				id: 42,
				name: 'Oceania 2',
				description:
					'Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/2.jpg',
			},
			{
				id: 43,
				name: 'Oceania 3',
				description:
					'Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/3.jpg',
			},
			{
				id: 44,
				name: 'Oceania 4',
				description:
					'Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/4.jpg',
			},
			{
				id: 45,
				name: 'Oceania 5',
				description:
					'Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/5.jpg',
			},
			{
				id: 46,
				name: 'Oceania 6',
				description:
					'Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/6.jpg',
			},
			{
				id: 47,
				name: 'Oceania 7',
				description:
					'Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/7.jpg',
			},
			{
				id: 48,
				name: 'Oceania 8',
				description:
					'Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/8.jpg',
			},
			{
				id: 49,
				name: 'Oceania 9',
				description:
					'Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/9.jpg',
			},
			{
				id: 50,
				name: 'Oceania 10',
				description:
					'Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/oceania/10.jpg',
			},
		],
		antartica: [
			{
				id: 51,
				name: 'Antartica 1',
				description:
					'Antartica 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/antartica/1.jpg',
			},
			{
				id: 52,
				name: 'Antartica 2',
				description:
					'Antartica 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/antartica/2.jpg',
			},
			{
				id: 53,
				name: 'Antartica 3',
				description:
					'Antartica 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/antartica/3.jpg',
			},
			{
				id: 54,
				name: 'Antartica 4',
				description:
					'Antartica 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/antartica/4.jpg',
			},
			{
				id: 55,
				name: 'Antartica 5',
				description:
					'Antartica 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/antartica/5.jpg',
			},
			{
				id: 56,
				name: 'Antartica 6',
				description:
					'Antartica 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/antartica/6.jpg',
			},
			{
				id: 57,
				name: 'Antartica 7',
				description:
					'Antartica 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/antartica/7.jpg',
			},
			{
				id: 58,
				name: 'Antartica 8',
				description:
					'Antartica 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/antartica/8.jpg',
			},
			{
				id: 59,
				name: 'Antartica 9',
				description:
					'Antartica 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				path: './img/antartica/9.jpg',
			},
		],
	},
};

const {photos} = data;
var categoriesData = {
    categories: [
        {id: 'america', name: 'America', photosNumber: photos['america'].length, coverImage: './img/america.jpg'},
        {id: 'europe', name: 'Europe', photosNumber: photos['europe'].length, coverImage: './img/europe.jpg'},
        {id: 'africa', name: 'Africa', photosNumber: photos['africa'].length, coverImage: './img/africa.jpg'},
        {id: 'asia', name: 'Asia', photosNumber: photos['asia'].length, coverImage: './img/asia.jpg'},
        {id: 'oceania', name: 'Oceania', photosNumber: photos['oceania'].length, coverImage: './img/oceania.jpg'},
        {id: 'antartica', name: 'Antartica', photosNumber: photos['antartica'].length, coverImage: './img/antartica.jpg'}
    ]
};

const {categories} = categoriesData; //destructuring object
const categoriesContainer$1 = document.getElementById('categories');

//creating categories
categories.forEach((category) => {
    const newCategory = document.createElement('a');
    const template = `
    <img class="category__img" src="${category.coverImage}" alt="" />
    <div class="category__data">
        <p class="category__name">${category.name}</p>
        <p class="category__photos-number">${category.photosNumber} Photos</p>
    </div>
    `;

    newCategory.innerHTML = template;
    newCategory.classList.add('category');
    newCategory.href = '#';
    newCategory.dataset.category = category.id;

    categoriesContainer$1.append(newCategory);
});

const gallery$4 = document.getElementById('gallery');
const loadImage = (id, name, path, description) => {
    gallery$4.querySelector('.gallery__image').src = path;
    gallery$4.querySelector('.gallery__image').dataset.imageId = id;
    gallery$4.querySelector('.gallery__title').innerText = name;
    gallery$4.querySelector('.gallery__active-image-description').innerText = description;

    const currentCategory = gallery$4.dataset.category;
    const photos = data.photos[currentCategory];
    let currentImageIndex;


    photos.forEach((photo, index) => {
        if(photo.id === id) {
            currentImageIndex = index;
        }
    });

    // Checking the active image
    if(gallery$4.querySelectorAll('.gallery__carousel-slide').length > 0) {
         //Removing active class from non active images
        gallery$4.querySelector('.gallery__carousel-slide--active').classList.remove('gallery__carousel-slide--active');
        gallery$4.querySelectorAll('.gallery__carousel-slide')[currentImageIndex].classList.add('gallery__carousel-slide--active');
    }   
};

const loadPreviousNext = (direction) => {
    const currentCategory = gallery$4.dataset.category;
    const photos = data.photos[currentCategory];
    const currentIdImage = parseInt(gallery$4.querySelector('.gallery__image').dataset.imageId);

    let currentImageIndex;
    photos.forEach((photo, index) => {
        if (photo.id === currentIdImage) {
            currentImageIndex = index;
        }
    });

    if (direction === 'next') {
        if(photos[currentImageIndex + 1]){
        const {id, name, path, description} = photos[currentImageIndex + 1];
        loadImage(id, name, path, description);
        }
    } else if (direction === 'previous') {
        if(photos[currentImageIndex - 1]){
            const {id, name, path, description} = photos[currentImageIndex - 1];
            loadImage(id, name, path, description);
        }
    }
};

const categoriesContainer = document.getElementById('categories');
const gallery$3 = document.getElementById('gallery');


// Open gallery event
categoriesContainer.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.closest('a')) {
        gallery$3.classList.add('gallery--active');
        document.body.style.overflow = 'hidden';


        const activeCategory = e.target.closest('a').dataset.category;
        gallery$3.dataset.category = activeCategory;

        const photos = data.photos[activeCategory];
        const carousel = gallery$3.querySelector('.gallery__carousel-slides');

        const {id, name, path, description} = photos[0];
        
        loadImage(id, name, path, description);

        carousel.innerHTML = '';
        
        photos.forEach((photo) => {
            const slide = `
            <a href="#" class="gallery__carousel-slide">
				<img class="gallery__carousel-image" src="${photo.path}" data-id=${photo.id} alt="" />
			</a>
            `;
            carousel.innerHTML += slide;
        });
        
        gallery$3.querySelector('.gallery__carousel-slide').classList.add('gallery__carousel-slide--active');
    }
});

// Close gallery event
const gallery$2 = document.getElementById('gallery');
const closeGallery = () => {
    gallery$2.classList.remove('gallery--active');
    document.body.style.overflow = '';
};

const slideClick = (e) => {
    let name, description, path;
    const id = parseInt(e.target.dataset.id);
    const gallery = document.getElementById('gallery');
    const activeCategory = gallery.dataset.category;
    
    data.photos[activeCategory].forEach((photo) => {
        if (photo.id === id) {
            name = photo.name;
            description = photo.description;
            path = photo.path;
        }
    });

    loadImage(id, name, path, description);
};

const gallery$1 = document.getElementById('gallery');


const carousel = (direction) => {

    const options = {
        root: document.querySelector('.gallery__carousel-slides'),
        rootMargin: '0px',
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
        const visibleSlides = entries.filter((entry) => {
            if(entry.isIntersecting === true) {
                return entry;
            }
        });


        if (direction === 'previous') {
            const firstVisibleSlide = visibleSlides[0];
            const firstVisibleSlideIndex = entries.indexOf(firstVisibleSlide);

            if(firstVisibleSlideIndex >= 1) {
                entries[firstVisibleSlideIndex -1].target.scrollIntoView({
                behavior: 'smooth',
                inline: 'start'
                });
            }
            
        } else if(direction === 'next') {
            const lastVisibleSlide = visibleSlides[visibleSlides.length - 1];
            const lastVisibleSlideIndex = entries.indexOf(lastVisibleSlide);
            
            if(entries.length - 1 > lastVisibleSlideIndex) {
               entries[lastVisibleSlideIndex + 1].target.scrollIntoView({
                behavior: 'smooth',
                inline: 'start'
                }); 
            }
            
        }

        const slides = gallery$1.querySelectorAll('.gallery__carousel-slide');
        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, options);

    const slides = gallery$1.querySelectorAll('.gallery__carousel-slide');
    slides.forEach((slide) => {
        observer.observe(slide);
    });
};

const gallery = document.getElementById('gallery');
gallery.addEventListener('click', (e) => {
    const button = e.target.closest('button');

    if(button?.dataset?.action === 'close-gallery'){
        closeGallery();
    }

    // Carousel slide click event
    if (e.target.dataset.id) {
        slideClick(e);
    }

    // Next image button

    if (button?.dataset?.action === 'next-image') {
        loadPreviousNext('next');
    }

    // Previous image button
    if (button?.dataset?.action === 'previous-image') {
        loadPreviousNext('previous');
    }

    // Carousel next
    if (button?.dataset?.action === 'next-slide') {
        carousel('next');
    }
    
    // Carousel previous
    if (button?.dataset?.action === 'previous-slide') {
        carousel('previous');
    }
});
