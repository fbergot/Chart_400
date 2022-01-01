/**
 * Create histogram chart (400px)
 */
export class Chart_400 {
    /**
     *Creates an instance of Grafik_400.
     * @param {{context:CanvasRenderingContext2D, background_color:String,labels:Array<String>, scales:String}} { context, background_color, labels, scales }
     */
    constructor({ context, background_color, labels, scales }) {
      this.context = context;
      this.background_color = background_color;
      this.labels = labels;     
      this.scales = scales;
    }
	/**
	 * Allows display labels on graph
	 * @param {String} data_font
	 * @param {String} color
	 */
	draw_labels(data_font, color) {     
		let t = 130;
		for (let i = 0; i < this.labels.length; i++) {
			this.draw_words(color, data_font, this.labels[i], t, 440);
			t += 100;
		}
	}

	/**
	 * Allows display scales for graph
	 * @param {String} data_font
	 * @param {String} color
	 */
    draw_scales(data_font, color) {
        let t = 400;
        for (let i = 0; i < this.scales.length; i++) {
          this.draw_words(color, data_font, this.scales[i], 50, t);
          t -= 100;
        }
    }

    /**
     * Display the background with a instance background_color
     */
    background() {
		this.context.fillStyle = this.background_color;
		this.context.fillRect(100, 0, 400, 400);
    }

    /**
     * Display the background with lines
     * @param {String} color color of the line
     */
    background_line(color) {     
        this.context.fillStyle = this.background_color;
        this.context.fillRect(100, 0, 400, 400);
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.moveTo(100, 300);
        this.context.lineTo(500, 300);
        this.context.moveTo(100, 200);
        this.context.lineTo(500, 200);
        this.context.moveTo(100, 100);
        this.context.lineTo(500, 100);
        this.context.stroke();
    }

    /** Make a histogram graphic
     * @param {Array<Number>} arr_data data for display
     * @param {Array<String>} arr_color colors for histograms
     */
	histogram(arr_data, arr_color) {
		let t = 130;
		let n = 0;
		for (let i = 0; i < arr_data.length; i++) {
			let calc = 400 - arr_data[i];
			this.draw_rect(t, calc, 40, arr_data[i], arr_color[n]);
			n += 1;
			t += 100;
		}
	}
    /** Internal function for draw rect
     * @param {Number} x origin in x
     * @param {Number} y origin in y
     * @param {Number} d_x size in x
     * @param {Number} d_y size in y
     * @param {String} color color for the rect
     */
	draw_rect(x, y, d_x, d_y, color) {      
		this.context.fillStyle = color;
		this.context.fillRect(x, y, d_x, d_y);
	}

  /** Internal function for draw words
   * @param {String} color 
   * @param {String} data_font 
   * @param {String} data 
   * @param {Number} x 
   * @param {Number} y 
   */
    draw_words(color, data_font, data, x, y) {
      this.context.fillStyle = color;
      this.context.font = data_font;
      this.context.fillText(data, x, y);
    }
}

export class Chart_400_lineChart extends Chart_400 {
    /**
     * Creates an instance of Chart_400_lineChart  
     * @param {{
                context:CanvasRenderingContext2D,
                background_color:String,
                labels:Array<String>,
                scales:Array<String>,
                data:Array{x:Number, y:Number}
              }} 
     *  context => context2d (canvas.getContext("2d"))
     *  background_color => Color for background
     *  labels => Array for labels data
     *  scales => Array for scales data
     *  data =>  Array of data (x and y) for display in a graph
     */
    constructor({ context, background_color, labels, scales, data }) {
		super({ context, background_color, labels, scales });
		this.data = data;
    }

    /**
     * draw points in chart
     * @param {String} colorPoint
     * @param {String} colorLine
     */
	draw_point(colorPoint, colorLine) {   
		for (let i = 0; i < this.data.length; i++) {
			this.draw_fill_circle({ color: colorPoint, radius: 5, lineWidth: "2" },
				this.data[i].x,
				this.data[i].y
			);

			//draw all lines beetween points
			if (i < this.data.length - 1) {
				this.draw_line(
					colorLine,
					this.data[i].x,
					this.data[i].y,
					this.data[i + 1].x,
					this.data[i + 1].y
				);
			}
		}
	}

    /**
	 * Draw fill circle/point
     * @param {{color: String, radius: Number, lineWidth: String}}
     * @param {Number} dataX
     * @param {Number} dataY
     */
    draw_fill_circle({ color, radius, lineWidth }, dataX, dataY) {
		this.context.beginPath();
		this.context.fillStyle = color;
		this.context.lineWidth = lineWidth;
		this.context.arc(dataX, dataY, radius, 0, 2 * Math.PI);
		this.context.fill();
    }

  /**
   * Draw line
   * @param {String} color
   * @param {Number} x
   * @param {Number} y
   * @param {Number} x_dest
   * @param {Number} y_dest
   */
	draw_line(color, x, y, x_dest, y_dest) {
		this.context.beginPath();
		this.context.strokeStyle = color;
		this.context.moveTo(x, y);
		this.context.lineTo(x_dest, y_dest);
		this.context.stroke();
	}
}




