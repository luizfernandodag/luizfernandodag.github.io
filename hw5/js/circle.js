export default class circle {
		constructor(radius){
		//width,heigth and radious are the same for a circle div

		this.width = radius;
		this.height = radius;
		this.radius = radius;


		}
		// GETTERS
		get radius(){
			return this.radius;
		}
		get Height(){
		 	return this.height;
		}
		get width(){
			return this.width;
		}
		// SETTERS
		set radius(r)
		{
			this.radius = r;
		}
		set height(h)
		{
			this.height = h;
		}
		set width(w)
		{
			this.width = w;
		}

		//Methods
		grow(heightGrow, widthGrow, radiusGrow)
		{
			var current_radius = this.radius();
			var current_width = this.width();
			var current_height = this.height();
			this.radius(current_radius+radiusGrow);
			this.width(current_width+ widthGrow);
			this.height(current_height+heightGrow);


		}



	};
