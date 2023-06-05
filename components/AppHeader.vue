<template>
	<header class="relative bg-zinc-800 shadow-sm flex justify-center">
		<div class="w-11/12 flex justify-between items-center px-6 py-3">
			<div>
				<a class="flex items-center text-zinc-100" href="/">
					<img
						src="@/assets/icons/cf_logo_color_no_bg.svg"
						class="h-8 mr-3"
						alt="Cocktail Fever Logo"
					/>
					<h3 class="text-gold-gradient font-fjalla">Cocktail Fever</h3>
				</a>
			</div>
			<HeadlessMenu as="div" class="relative inline-block text-left">
				<HeadlessMenuButton class="lg:hidden"
					><Icon name="mdi:dots-vertical" size="36px"
				/></HeadlessMenuButton>
				<transition
					enter-active-class="transition ease-out duration-100"
					enter-from-class="transform opacity-0 scale-95"
					enter-to-class="transform opacity-100 scale-100"
					leave-active-class="transition ease-in duration-75"
					leave-from-class="transform opacity-100 scale-100"
					leave-to-class="transform opacity-0 scale-95"
				>
					<HeadlessMenuItems
						class="absolute right-0 z-20 mt-2 w-40 origin-top-right rounded-lg bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					>
						<div class="py-1">
							<HeadlessMenuItem v-for="route in routes" v-slot="{ active }">
								<a
									:href="route.path"
									class="block px-4 py-2 nav-link text-xl font-fjalla"
								>
									<span :class="active ? 'text-gold-gradient' : ''">{{
										route.name
									}}</span>
								</a>
							</HeadlessMenuItem>
						</div>
					</HeadlessMenuItems>
				</transition>
			</HeadlessMenu>
			<div class="max-lg:hidden block">
				<ul class="navbar-nav flex pl-0 list-style-none mr-auto items-center">
					<li v-for="route in routes" class="nav-item p-2">
						<a
							:href="route.path"
							class="text-zinc-100 mx-3 text-xl font-fjalla"
						>
							<span class="hover:text-gold-gradient">{{ route.name }}</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			routes: [
				{
					name: "Home",
					path: "/",
				},
				{
					name: "Pakketten",
					path: "/deals",
				},
				{
					name: "Cocktails",
					path: "/cocktails",
				},
				{
					name: "Workshops",
					path: "/workshops",
				},
				{
					name: "Contact",
					path: "/contact",
				},
				{
					name: "Over Ons",
					path: "/about",
				},
			],
		};
	},
};
</script>
